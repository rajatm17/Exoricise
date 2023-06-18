import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DetailCard from '../components/DetailCard';
import VideoRecommendation from '../components/VideoRecommendation';
import SimiliarExercise from '../components/SimiliarExercise';

import { useParams } from 'react-router-dom';

import { fetchData, exerciseOptions, videoOptions } from '../utilis/fetchData';

export default function ExerciseDetail() {
  const { id } = useParams();
  console.log(id);
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const [targetList, setTargetList] = useState([]);
  const [bodyPartList, setBodyPartList] = useState([]);

  useEffect(() => {
    const fetchedDetail = async () => {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exercisesData);
      setTimeout(async () => {
        const videoData = await fetchData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercisesData.name}`,
          videoOptions
        );
        setVideoDetails(videoData.contents);
      }, 1000);

      setTimeout(async () => {
        const targetMuscleData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/target/${exercisesData.target}`,
          exerciseOptions
        );
        setTargetList(targetMuscleData);

        const bodyPartData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${exercisesData.bodyPart}`,
          exerciseOptions
        );
        setBodyPartList(bodyPartData);
      }, 1000);
    };
    fetchedDetail();
  }, [id]);

  return (
    <Box>
      <DetailCard exerciseDetail={exerciseDetail} />
      <VideoRecommendation
        videoDetails={videoDetails}
        name={exerciseDetail.name}
      />
      <SimiliarExercise
        targetList={targetList}
        bodyPartList={bodyPartList}
        bodyPart={exerciseDetail.bodyPart}
        target={exerciseDetail.target}
      />
    </Box>
  );
}

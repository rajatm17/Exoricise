import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utilis/fetchData';
import ExerciseCard from './ExerciseCard';

export default function Exercises({ exercises, setExercises, bodyPart }) {
  const exercisePerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexofFirstExercise = indexOfLastExercise - exercisePerPage;

  const currentExercises = exercises.slice(
    indexofFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercise = async () => {
      let searchedExercise = [];
      if (bodyPart === 'all') {
        searchedExercise = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );
      } else {
        searchedExercise = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(searchedExercise);
    };
    fetchExercise();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: '110px', md: '60px', sm: '60px' } }}
      p="20px"
    >
      <Typography variant="h3" mb="50px">
        Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: '110px', md: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      <Stack alignItems="center" mt="120px">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            count={Math.ceil(exercises.length / exercisePerPage)}
            onChange={paginate}
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
}

import { Box } from '@mui/material';
import React from 'react';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import { useState } from 'react';

export default function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
}

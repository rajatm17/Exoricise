import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ExerciseCard from './ExerciseCard';

export default function SimiliarExercise({
  bodyPartList,
  targetList,
  bodyPart,
  target,
}) {
  console.log(bodyPartList);
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: '33px', fontFamily: 'Inter' }}>
        Exercises similiar to{' '}
        <span
          style={{ textDecoration: 'underline', textTransform: 'capitalize' }}
        >
          {bodyPart}
        </span>
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
      >
        {bodyPartList.slice(0, 6).map((bodyPartListItem) => (
          <ExerciseCard exercise={bodyPartListItem} />
        ))}
      </Stack>

      <Typography variant="h4" sx={{ mb: '33px' }}>
        Exercises similiar to{' '}
        <span
          style={{ textDecoration: 'underline', textTransform: 'capitalize' }}
        >
          {target}
        </span>
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
      >
        {targetList.slice(0, 6).map((targetListItem) => (
          <ExerciseCard exercise={targetListItem} />
        ))}
      </Stack>
    </Box>
  );
}

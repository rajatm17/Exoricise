import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

import { useNavigate } from 'react-router-dom';
export default function ExerciseCard({ exercise }) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/exercise/${exercise.id}`);
  };
  return (
    // <Link to={`/exercise/${exercise.id}`}>
    <Box
      type="button"
      onClick={handleClick}
      sx={{
        width: 400,
        height: 500,
        cursor: 'pointer',
        mb: '100px',
      }}
    >
      <img
        className="exercise-card"
        src={exercise.gifUrl}
        alt={exercise.name}
      ></img>
      <Stack direction="row" gap="20px" mt="40px">
        <Typography
          sx={{
            p: '10px',
            textTransform: 'capitalize',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          {exercise.equipment}
        </Typography>
        <Button sx={{ color: 'black', background: 'orange' }}>
          {exercise.bodyPart}
        </Button>
      </Stack>
      <Typography sx={{ mt: '5px', textTransform: 'capitalize', ml: '10px' }}>
        {exercise.name}
      </Typography>
    </Box>
    // </Link>
  );
}
// style={{ height: 400, width: 400 }}

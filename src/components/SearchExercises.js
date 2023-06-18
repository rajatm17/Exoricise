import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utilis/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

export default function SearchExercises({
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
}) {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
      // console.log(exercises);
    }
  };
  return (
    <Stack mt="600px" justifyContent="center" alignItems="center">
      <Typography
        sx={{ fontSize: { lg: '30px', md: '30px', sm: '20px', xs: '16px' } }}
        fontWeight="700"
        textAlign="center"
      >
        Search for the Exorcise <br /> You want to do
      </Typography>
      <Box position="relative">
        <TextField
          fullWidth
          type="text"
          size="small"
          placeholder="search here for exercises"
          mt="250px"
          height="10px"
          sx={{
            width: { lg: '1000px', xs: '350px' },
            backgroundColor: 'white',
            mt: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: 'white',
            textTransform: 'none',
            width: { lg: '180px', xs: '80px' },
            fontSize: { lg: '20px', xs: '10px' },
            height: '40px',
            position: 'absolute',
            mt: '40px',
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
}

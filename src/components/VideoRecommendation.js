import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function VideoRecommendation({ name, videoDetails }) {
  if (videoDetails.length === 0) return <p>Loading...</p>;
  console.log(videoDetails);
  return (
    <Box sx={{ mt: { lg: '110px', xs: '50px' } }} p="20px">
      <Typography variant="h4" sx={{ mb: '33px' }}>
        Learn{' '}
        <span
          style={{ textDecoration: 'underline', textTransform: 'capitalize' }}
        >
          {name}
        </span>{' '}
        from videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
      >
        {videoDetails?.slice(0, 3).map((item, index) => (
          <a
            target="_blank"
            rel="noreferrer"
            className="exercise-video"
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          >
            <img src={item.video.thumbnails[0].url} alt=""></img>
            <Typography
              sx={{
                textDecoration: 'none',
                color: 'black',
                textTransform: 'capitalize',
              }}
            >
              {item.video.title}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

export default function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      mr="20px"
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: '4px solid #ff2625',
              backgroundColor: 'white',
              width: '270px',
              height: '280px',
              cursor: 'pointer',
              gap: '50px',
            }
          : {
              backgroundColor: 'white',
              width: '270px',
              height: '280px',
              cursor: 'pointer',
              gap: '50px',
            }
      }
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img
        src={Icon}
        style={{ width: '40px', height: '40px' }}
        alt="dumbell"
      ></img>
      <Typography fontSize="24px" fontWeight="bold">
        {item}
      </Typography>
    </Stack>
  );
}

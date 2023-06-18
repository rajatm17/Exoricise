import { Stack, Typography, Grid } from '@mui/material';
import React from 'react';

import BodyPartImg from '../assets/icons/body-part.png';
import EquipmentImg from '../assets/icons/equipment.png';
import Target from '../assets/icons/target.png';

export default function DetailCard({ exerciseDetail }) {
  const { id, name, target, bodyPart, gifUrl, equipment } = exerciseDetail;
  return (
    <Grid container sx={{ mb: '100px', mt: '80px' }}>
      <Grid
        item
        xs={12}
        md={6}
        sm={12}
        sx={{ ml: { lg: '100px', sm: '30px', xs: '50px' } }}
      >
        <img src={gifUrl} alt={name} />
      </Grid>
      <Grid item sx={{ ml: '40px' }}>
        <Typography
          sx={{
            p: '20px',
            fontWeight: '700',
            textTransform: 'capitalize',
            fontSize: '30px',
            fontFamily: 'ubuntu',
          }}
        >
          {name}
        </Typography>
        <p>This exercise targets your {target} muscle. It is good for health</p>
        <Stack
          direction="row"
          sx={{ mb: '30px', mt: '30px' }}
          alignItems="center"
        >
          <img src={BodyPartImg} alt="bodypart"></img>
          <Typography
            sx={{
              textTransform: 'capitalize',
              ml: '20px',
            }}
          >
            {bodyPart}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" mb="30px">
          <img src={EquipmentImg} alt="equipment"></img>
          <Typography
            sx={{
              textTransform: 'capitalize',
              ml: '20px',
            }}
          >
            {equipment}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <img src={Target} alt="target"></img>
          <Typography
            sx={{
              textTransform: 'capitalize',
              ml: '20px',
            }}
          >
            {target}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

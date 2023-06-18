import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import Banner from '../assets/images/banner.png';

export default function HeroBanner() {
  return (
    <Box
      position="relative"
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px', xs: '50px' },
        alignItems: { sm: 'center', xs: 'center', md: 'left', lg: 'left' },
        mr: { sm: '50px', xs: '50px' },
      }}
    >
      {/* <Stack
        sx={{
          alignItems: { sm: 'center', xs: 'center', md: 'left', lg: 'left' },
          ml: { lg: '0px' },
        }}
      > */}
      <Typography
        ml="0px"
        style={{ fontFamily: 'Ubuntu' }}
        color="#A7727D"
        fontWeight="700"
        fontSize="30px"
      >
        Exorcise
      </Typography>

      <Typography
        fontWeight={'700'}
        xs={{ fontWeight: { lg: '800', sm: '600', xs: '500' } }}
      >
        Sweat offf!!
      </Typography>
      <Typography fontSize="23px" mb={4} fontFamily="Inter">
        Check out the impossible Exorcises
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exorcises that you'll never be able to do{' '}
      </Button>
      {/* </Stack> */}
      <img src={Banner} alt="banner" className="hero-banner-img"></img>
    </Box>
  );
}

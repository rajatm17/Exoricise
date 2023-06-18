import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      px="20px"
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
        fontSize: { sm: '40px' },
        fontWeight: '600',
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '50px', height: '50px', margin: '0 20px' }}
        />
      </Link>
      <Stack
        sx={{ fontSize: { sm: '35px', xs: '20px' }, fontFamily: 'Roboto' }}
        direction="row"
        spacing={2}
        gap="40px"
        // fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1213' }}>
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: 'none', color: '#3A1213' }}
        >
          Exercises
        </a>
        {/* <Link to="/" style={{ textDecoration: 'none', color: '#3A1213' }}>
          About us
        </Link> */}
      </Stack>
    </Stack>
  );
}

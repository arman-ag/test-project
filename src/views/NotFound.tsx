import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
  return (
    <Box
      flexDirection="column"
      display={'flex'}
      justifyContent="center"
      alignItems={'center'}
      sx={{ minHeight: '100vh' }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h3">page not found</Typography>
    </Box>
  );
};

export default NotFound;

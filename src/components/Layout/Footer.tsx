import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <Box display="felx" justifyContent="center" mt={10}>
        <Typography variant="body1" color="inherit" align="center">
          © 2022 Arman-Ag
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;

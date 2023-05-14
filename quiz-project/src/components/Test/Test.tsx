import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import { yellow } from '@mui/material/colors';
import React from 'react';

export default function Test() {
  return (
    <Box
      sx={{
        bgcolor: yellow[300],
        color: 'error.main',
      }}
    >
      <div>Test</div>
    </Box>
  );
}

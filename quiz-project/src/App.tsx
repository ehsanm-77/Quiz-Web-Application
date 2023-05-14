import { useState } from 'react';
import Test from './components/Test/Test';
import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'poppins',
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography>
          <Test />
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;

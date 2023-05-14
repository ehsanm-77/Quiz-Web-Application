import { useState } from 'react';
import Test from './components/Test/Test';
import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  Button,
  IconButton,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Container } from './layout/Container/Container';

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const darkTheme = createTheme({
    typography: {
      fontFamily: 'poppins',
    },
    spacing: 20,
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    typography: {
      fontFamily: 'poppins',
    },
    spacing: 20,
    palette: {
      mode: 'light',
    },
  });

  const handleThemeChange = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <Box
          sx={{
            bgcolor: 'background.default',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography>
            <Container currentTheme={currentTheme} />
          </Typography>
          <IconButton onClick={handleThemeChange} color="primary">
            {currentTheme === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

import { useState } from 'react';
import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  IconButton,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Container } from './layout/Container/Container';
import { FormProvider } from './utils/FormContext/FormContext';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

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
          <Typography className="w-full h-full flex justify-center items-center">
            <FormProvider>
              <Container currentTheme={currentTheme} />
            </FormProvider>
          </Typography>
        </Box>
        <div className="absolute top-0">
          <IconButton onClick={handleThemeChange} color="primary">
            {currentTheme === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

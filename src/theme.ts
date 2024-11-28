'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-geist-sans)',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1a73e8',
      dark: '#1557b0',
      light: '#4285f4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8e24aa',
    },
    custom: {
      main: '#ff4081',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
        contained: {
          backgroundColor: '#1a73e8',
          '&:hover': {
            backgroundColor: '#1557b0',
          },
        },
      },
    },
  },
});

export default theme;

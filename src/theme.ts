'use client';
import { createTheme } from '@mui/material/styles';

// Add this type declaration at the top of the file
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      main: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      main: string;
    };
  }
}

export const createAppTheme = (isDarkMode: boolean) => {
  return createTheme({
    typography: {
      fontFamily: 'var(--font-geist-sans)',
    },
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
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
      background: {
        default: isDarkMode ? '#0a0a0a' : '#ffffff',
        paper: isDarkMode ? '#1a1a1a' : '#ffffff',
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
};

'use client';

import { CircularProgress, Box } from '@mui/material';

interface LoadingProps {
  size?: number;
  fullscreen?: boolean;
}

export const Loading = ({ size = 40, fullscreen = false }: LoadingProps) => {
  return (
    <Box sx={(theme) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: fullscreen ? '100vh' : '100%',
      minHeight: fullscreen ? 'unset' : '200px',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: theme.palette.mode === 'dark' 
        ? 'rgba(10, 10, 10, 0.8)' 
        : 'rgba(255, 255, 255, 0.8)',
      zIndex: 9999,
    })}>
      <CircularProgress 
        size={size}
        sx={(theme) => ({
          color: theme.palette.mode === 'dark' ? '#33ffb8' : '#1e8561'
        })}
      />
    </Box>
  );
};

export default Loading; 
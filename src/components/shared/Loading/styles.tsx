import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LoadingContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'fullscreen',
})<{ fullscreen?: boolean }>(({ fullscreen }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: fullscreen ? '100vh' : '100%',
  minHeight: fullscreen ? 'unset' : '200px',
})); 
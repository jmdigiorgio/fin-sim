import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ButtonContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'collapsed',
})<{ collapsed?: boolean }>(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '-20px',
  transform: 'translateX(-50%)',
  transition: 'all 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.7,
  zIndex: 1200,
  '& .MuiIconButton-root': {
    backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f5f5f5',
    padding: '8px',
  },
  '&:hover': {
    opacity: 1,
  },
})); 
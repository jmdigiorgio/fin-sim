import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ButtonContainer = styled(Box)({
  position: 'absolute',
  top: '20px',
  right: '12px',
  transition: 'opacity 0.2s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.7,
  '&:hover': {
    opacity: 1,
  },
}); 
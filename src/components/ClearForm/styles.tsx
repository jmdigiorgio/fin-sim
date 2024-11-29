import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.7)'
    : 'rgba(0, 0, 0, 0.54)',
  '&:hover': {
    color: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.9)'
      : 'rgba(0, 0, 0, 0.78)',
  }
}));

import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '140px',
  '& input': {
    fontFamily: 'var(--font-geist-sans)',
    fontSize: '16px'
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.mode === 'dark' ? '#33ffb8' : '#1e8561',
    },
  },
  '& .MuiInputBase-input::selection': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(51, 255, 184, 0.2)' : 'rgba(30, 133, 97, 0.2)',
  }
}));

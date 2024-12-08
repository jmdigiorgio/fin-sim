import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: '140px',
  '& .MuiOutlinedInput-root': {
    height: '40px',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.mode === 'dark' ? '#33ffb8' : '#1e8561',
    },
  },
  '& .MuiSelect-select': {
    padding: '8px 14px',
    fontFamily: 'var(--font-geist-sans)',
    fontSize: '16px'
  },
  '& .MuiSelect-select::selection': {
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(51, 255, 184, 0.2)' : 'rgba(30, 133, 97, 0.2)',
  }
}));

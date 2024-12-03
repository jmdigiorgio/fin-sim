import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)({
  width: '80px',
  '& input': {
    fontFamily: 'var(--font-geist-sans)',
  }
});

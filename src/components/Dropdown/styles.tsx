import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)({
  minWidth: 120,
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    fontFamily: 'var(--font-geist-sans)',
  }
});

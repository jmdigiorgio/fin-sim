import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)({
  minWidth: '140px',
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    fontFamily: 'var(--font-geist-sans)',
    fontSize: '16px'
  }
});

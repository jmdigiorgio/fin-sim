import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)({
  minWidth: '140px',
  '& .MuiOutlinedInput-root': {
    height: '40px'
  },
  '& .MuiSelect-select': {
    padding: '8px 14px',
    fontFamily: 'var(--font-geist-sans)',
    fontSize: '16px'
  }
});

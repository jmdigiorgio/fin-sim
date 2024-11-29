'use client';

import { TextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent } from 'react';

const StyledTextField = styled(TextField)({
  width: '120px',
  '& input': {
    fontFamily: 'var(--font-geist-sans)',
  }
});

interface MoneyInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const MoneyInput = ({ value, onChange, placeholder = '0.00' }: MoneyInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    // Allow empty input, digits, one decimal point, and limit decimal places to 2
    if (newValue === '' || /^\d*\.?\d{0,2}$/.test(newValue)) {
      onChange(newValue);
    }
    // Invalid input is simply ignored, no error state needed
  };

  return (
    <StyledTextField
      size="small"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      inputProps={{
        'aria-label': 'amount',
      }}
    />
  );
};

export default MoneyInput;
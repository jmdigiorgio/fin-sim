'use client';

import { ChangeEvent } from 'react';
import { StyledTextField } from './styles';

interface PercentageInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
}

export const PercentageInput = ({ 
  value, 
  onChange, 
  placeholder = '0',
  min = 0,
  max = 1000
}: PercentageInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    // Allow empty input or integers only, within min/max range
    if (newValue === '' || (/^\d+$/.test(newValue) && 
        parseInt(newValue) >= min && 
        parseInt(newValue) <= max)) {
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
        endAdornment: '%',
      }}
      inputProps={{
        'aria-label': 'percentage',
        style: { textAlign: 'center' }
      }}
    />
  );
};

export default PercentageInput;

'use client';

import { ChangeEvent } from 'react';
import { StyledTextField } from './styles';

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  max?: number;
}

export const NumberInput = ({ 
  value, 
  onChange, 
  placeholder = '0',
  min = 0,
  max = 999
}: NumberInputProps) => {
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
      inputProps={{
        'aria-label': 'number',
        style: { textAlign: 'center' }
      }}
    />
  );
};

export default NumberInput;

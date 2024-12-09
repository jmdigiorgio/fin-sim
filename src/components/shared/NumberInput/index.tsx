'use client';

import { ChangeEvent } from 'react';
import { StyledTextField } from './styles';

// Define the expected props for this component
interface NumberInputProps {
  value: string;      // The current value of the input
  onChange: (value: string) => void;  // Callback function when value changes
  placeholder?: string;  // Optional placeholder text
  min?: number;       // Optional minimum value (defaults to 0)
  max?: number;       // Optional maximum value (defaults to 999)
}

/**
 * NumberInput Component
 * 
 * A specialized input field for handling whole number values. This component ensures
 * that users can only enter valid integers within a specified range. It provides
 * a consistent UI with centered text alignment.
 * 
 * Features:
 * - Validates input to ensure only whole numbers are accepted
 * - Configurable minimum and maximum values
 * - Center-aligned text for better readability
 * - Silently prevents invalid inputs without error messages
 * - Supports empty input for clearing values
 * 
 * Usage:
 * <NumberInput
 *   value={count}
 *   onChange={handleCountChange}
 *   placeholder="0"
 *   min={0}
 *   max={999}
 * />
 */

export const NumberInput = ({ 
  value, 
  onChange, 
  placeholder = '0',
  min = 0,
  max = 999
}: NumberInputProps) => {
  // Handler for when the input value changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    // Allow empty input or integers only, within min/max range
    if (newValue === '' || (/^\d+$/.test(newValue) && 
        parseInt(newValue) >= min && 
        parseInt(newValue) <= max)) {
      onChange(newValue);
    }
    // Invalid inputs are silently ignored
  };

  return (
    <StyledTextField
      size="small"  // Makes the input field compact
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      inputProps={{
        'aria-label': 'number',  // For accessibility
        style: { textAlign: 'center' }  // Centers the text
      }}
    />
  );
};

export default NumberInput;

'use client';

import { ChangeEvent } from 'react';
import { StyledTextField } from './styles';

// Define the expected props for this component
interface PercentageInputProps {
  value: string;      // The current value of the input
  onChange: (value: string) => void;  // Callback function when value changes
  placeholder?: string;  // Optional placeholder text
  min?: number;       // Optional minimum value (defaults to 0)
  max?: number;       // Optional maximum value (defaults to 1000)
}

/**
 * PercentageInput Component
 * 
 * A specialized input field for handling percentage values. This component ensures
 * that users can only enter valid whole number percentages within a specified range.
 * It provides a consistent UI with a percentage symbol suffix and centered text.
 * 
 * Features:
 * - Validates input to ensure only whole numbers are accepted
 * - Configurable minimum and maximum values (0-1000% by default)
 * - Provides visual feedback with a percentage symbol suffix
 * - Center-aligned text for better readability
 * - Silently prevents invalid inputs without error messages
 * 
 * Usage:
 * <PercentageInput
 *   value={percent}
 *   onChange={handlePercentChange}
 *   placeholder="0"
 *   min={0}
 *   max={1000}
 * />
 */

export const PercentageInput = ({ 
  value, 
  onChange, 
  placeholder = '0',
  min = 0,
  max = 1000
}: PercentageInputProps) => {
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
      InputProps={{
        endAdornment: '%',  // Adds percentage symbol at end of input
      }}
      inputProps={{
        'aria-label': 'percentage',  // For accessibility
        style: { textAlign: 'center' }  // Centers the text
      }}
    />
  );
};

export default PercentageInput;

'use client';

import { InputAdornment } from '@mui/material';
import { ChangeEvent } from 'react';
import { StyledTextField } from './styles';

// Define the expected props for this component
interface MoneyInputProps {
  value: string;      // The current value of the input
  onChange: (value: string) => void;  // Callback function when value changes
  placeholder?: string;  // Optional placeholder text
}

/**
 * MoneyInput Component
 * 
 * A specialized input field for handling monetary values. This component ensures
 * that users can only enter valid currency amounts (positive numbers with up to
 * 2 decimal places). It provides a consistent UI with a dollar sign prefix and
 * right-aligned text.
 * 
 * Features:
 * - Validates input to ensure only valid money amounts are accepted
 * - Provides visual feedback with a dollar sign prefix
 * - Right-aligns text for better number readability
 * - Supports both whole numbers and decimals
 * - Silently prevents invalid inputs without error messages
 * 
 * Usage:
 * <MoneyInput
 *   value={amount}
 *   onChange={handleAmountChange}
 *   placeholder="0.00"
 * />
 */

export const MoneyInput = ({ value, onChange, placeholder = '0.00' }: MoneyInputProps) => {
  // Handler for when the input value changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    // Regex explanation:
    // ^$ - matches empty string
    // | - OR
    // ^\d* - start with zero or more digits
    // \.? - optionally followed by a decimal point
    // \d{0,2}$ - end with 0-2 digits after decimal point
    if (/^$|^\d*\.?\d{0,2}$/.test(newValue)) {
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
        // Adds dollar sign at start of input
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      inputProps={{
        'aria-label': 'amount',  // For accessibility
        style: { textAlign: 'right' }  // Aligns numbers to the right
      }}
    />
  );
};

export default MoneyInput;
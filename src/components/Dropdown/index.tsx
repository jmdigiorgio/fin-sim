'use client';

import { Select, SelectProps, InputLabel } from '@mui/material';
import { StyledFormControl } from './styles';

export interface DropdownProps extends Omit<SelectProps, 'variant'> {
  label?: string;
}

export const Dropdown = ({ label, children, ...props }: DropdownProps) => {
  return (
    <StyledFormControl>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        variant="outlined"
        label={label}
        {...props}
      >
        {children}
      </Select>
    </StyledFormControl>
  );
};

export default Dropdown;


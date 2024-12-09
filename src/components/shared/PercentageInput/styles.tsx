import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

/**
 * PercentageInput Styles
 * 
 * Defines the custom styling for the PercentageInput component using Material-UI's
 * styled API. This ensures consistent appearance across the application while
 * maintaining theme compatibility.
 * 
 * Styling features:
 * - Fixed width for consistent layout
 * - Custom focus states with theme-aware colors
 * - Custom text selection colors
 * - Consistent font styling
 * - Theme-aware color adjustments for dark/light modes
 */

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '140px',  // Fixed width for consistency
  
  // Style the input text
  '& input': {
    fontFamily: 'var(--font-geist-sans)',
    fontSize: '16px'
  },
  
  // Style the input border when focused
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.mode === 'dark' ? '#33ffb8' : '#1e8561',
    },
  },
  
  // Style the text selection background
  '& .MuiInputBase-input::selection': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(51, 255, 184, 0.2)'  // Light green in dark mode
      : 'rgba(30, 133, 97, 0.2)',  // Dark green in light mode
  }
}));

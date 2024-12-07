/**
 * Box Component Styles
 * 
 * This file contains all the styling logic for the Box component.
 * It uses MUI's styled components to create a consistent, themeable container.
 * 
 * The styling includes:
 * - Responsive sizing (grows with content)
 * - Theme-aware colors (different styles for dark/light mode)
 * - Consistent spacing and borders
 * - Smooth transitions for any visual changes
 * 
 * These styles help maintain visual consistency across the application
 * while providing flexibility for different content types.
 */

// Import the tools we need from MUI (Material-UI)
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Create a styled version of MUI's Box component
// The theme parameter gives us access to our app's theme (colors, dark/light mode, etc.)
export const StyledBox = styled(Box)(({ theme }) => ({
  // Layout properties
  display: 'inline-flex',     // Makes the box inline and enables flex layout
  flexDirection: 'column',    // Stack children vertically
  
  // Background color based on dark/light mode
  // Using rgba for slight transparency
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(51, 255, 184, 0.03)'  // Very light green in dark mode
    : 'rgba(30, 133, 97, 0.08)',  // Slightly darker green in light mode
  
  // Border styling
  border: `2px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'  // Light border in dark mode
    : 'rgba(0, 0, 0, 0.1)'}`,     // Dark border in light mode
  borderRadius: '12px',           // Rounded corners
  
  // Other visual properties
  transition: 'all 0.2s ease',    // Smooth transitions for any changes
  position: 'relative',           // Enables positioning context for children
  padding: '24px',                // Space inside the box
  
  // Sizing behavior
  height: 'fit-content',          // Height grows to fit content
  alignSelf: 'flex-start'         // Prevents unwanted stretching in flex containers
}));
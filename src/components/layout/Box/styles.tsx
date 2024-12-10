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
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  minWidth: '300px',
  maxWidth: '100%',
  
  // Background color based on dark/light mode
  // Using rgba for slight transparency
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(20, 20, 20, 1.0)'  // Dark grey in dark mode
    : 'rgba(245, 245, 245, 1.0)',  // Light grey in light mode
  
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
  alignSelf: 'center',         // Changed from stretch to center

  // More pronounced shadow
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(0, 0, 0, 0.65)'
    : '0 8px 32px rgba(0, 0, 0, 0.25)',
}));
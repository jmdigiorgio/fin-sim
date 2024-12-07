/**
 * ComponentTitle Styles
 * 
 * This file contains all the styling logic for the ComponentTitle component.
 * It uses MUI's styled components to create consistent, themeable titles.
 * 
 * The styling includes:
 * - Flexible layout with space for right-aligned content
 * - Consistent typography using Geist Sans
 * - Proper spacing and alignment
 * - Standard heading sizes
 * 
 * These styles help maintain visual consistency across the application
 * while providing flexibility for different title configurations.
 */

// Import the tools we need from MUI
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Create a container for the title and optional right content
// This provides the layout structure for the component
export const TitleContainer = styled(Box)({
  // Layout properties
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '24px',
});

// Create the styled title element
// This handles the actual title text styling
export const StyledTitle = styled('h2')({
  // Typography properties
  margin: 0,
  fontSize: '20px',
  fontWeight: 600,
  fontFamily: 'var(--font-geist-sans)',
});
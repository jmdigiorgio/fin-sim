/**
 * BoxTitle Styles
 * 
 * This file contains the core styling logic for the BoxTitle component.
 * It establishes the layout structure and base styling while supporting
 * dynamic customization through props.
 * 
 * Key Style Features:
 * - Flexible container with column layout for title and metadata
 * - Alignment control through prop-based styling
 * - Consistent spacing with other components
 * - Theme-aware typography and colors
 * - Support for nested components with proper spacing
 * 
 * Implementation Notes:
 * - Uses MUI's styled API for theme integration
 * - Separates container and title styling for better organization
 * - Handles prop forwarding carefully to prevent DOM warnings
 * - Maintains consistent spacing through theme-based units
 * 
 * Style Structure:
 * TitleContainer
 *   └─ StyledTitle
 *        └─ (children)
 */

import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

/**
 * Container component that handles layout and spacing.
 * Uses flexbox for alignment control and configurable margins.
 * 
 * @prop {align} - Controls horizontal alignment of content
 * @prop {margins} - Controls vertical spacing above and below
 */
export const TitleContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'align',
})<{ 
  align?: 'left' | 'center' | 'right';
}>(({ align = 'left' }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
  width: '100%'
}));

/**
 * Styled heading component for consistent title presentation.
 * Handles typography and theme-aware color adaptation.
 * 
 * @styled h2
 * @themeSensitive Uses theme for dark/light mode color adaptation
 */
export const StyledTitle = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: '24px',
  fontWeight: 600,
  fontFamily: 'var(--font-geist-sans)',
  color: theme.palette.mode === 'dark' 
    ? '#33ffb8'
    : '#1e8561',
}));
import { styled } from '@mui/material/styles';

/**
 * MetadataTag Styles
 * 
 * Defines the styling for the MetadataTag component with comprehensive support for
 * theme modes, interactive states, and accessibility features.
 * 
 * Key Style Features:
 * - Theme-aware colors that adapt to dark/light mode
 * - Subtle interactive hover states for better UX
 * - Consistent spacing and dimensions across usage
 * - Accessible cursor indicators
 * - Flexible alignment system
 * - Smooth transitions for visual changes
 * 
 * Implementation Notes:
 * - Uses MUI's styled API for theme integration
 * - Implements shouldForwardProp to handle alignment prop
 * - Uses rgba colors for better theme compatibility
 * - Maintains consistent spacing through calculated padding
 * - Provides subtle visual feedback on hover
 * 
 * Style Structure:
 * TagContainer
 *   └─ Content (label text)
 *        └─ Hover state
 * 
 * @styled-component
 */

export const TagContainer = styled('span', {
  // Prevent 'align' prop from being passed to DOM
  shouldForwardProp: (prop) => prop !== 'align',
})<{ 
  align?: 'left' | 'center' | 'right';
}>(({ theme, align = 'left' }) => ({
  // Base styling
  display: 'inline-block',
  lineHeight: '1.4',
  whiteSpace: 'nowrap',
  textAlign: align,
  
  // Dimensions and spacing
  padding: '2px 6px',
  borderRadius: '8px',
  fontSize: '12px',
  
  // Theme-aware colors
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  color: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.7)'
    : 'rgba(0, 0, 0, 0.6)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
    
  // Interactive states
  cursor: 'help',
  transition: 'background-color 0.2s',
  
  // Hover effect
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.05)',
  }
}));
import { styled } from '@mui/material/styles';

/**
 * MetadataTag Styles
 * 
 * Defines the styling for the MetadataTag component with support for
 * theme modes and interactive states.
 * 
 * Key Style Features:
 * - Theme-aware colors and transitions
 * - Responsive hover states
 * - Flexible positioning system
 * - Consistent spacing and dimensions
 * - Accessible cursor indicators
 * 
 * Implementation Notes:
 * - Uses MUI's styled API for theme integration
 * - Handles prop forwarding for position and alignment
 * - Maintains consistent spacing through calculated margins
 * - Implements subtle hover effects for better UX
 * 
 * Style Structure:
 * TagContainer
 *   └─ (content)
 */

export const TagContainer = styled('span', {
  shouldForwardProp: (prop) => prop !== 'align',
})<{ 
  align?: 'left' | 'center' | 'right';
}>(({ theme, align = 'left' }) => ({
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  padding: '2px 6px',
  borderRadius: '8px',
  fontSize: '12px',
  color: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.7)'
    : 'rgba(0, 0, 0, 0.6)',
  cursor: 'help',
  transition: 'background-color 0.2s',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  display: 'inline-block',
  lineHeight: '1.4',
  whiteSpace: 'nowrap',
  textAlign: align,

  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.05)',
  }
}));
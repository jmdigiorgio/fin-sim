import { Tooltip } from '@mui/material';
import { TagContainer } from './styles';

/**
 * MetadataTag Component
 * 
 * A reusable tag component that displays metadata with tooltip functionality.
 * Designed to show additional information in a compact, accessible format.
 * 
 * Features:
 * - Tooltip integration for expanded information
 * - Customizable alignment options (left, center, right)
 * - Accessible by default with ARIA attributes
 * - Theme-aware styling with dark/light mode support
 * - Consistent spacing and dimensions
 * - Interactive hover states
 * 
 * Usage:
 * <MetadataTag 
 *   label="Version"
 *   tooltip="Current software version: 2.0.0"
 *   align="left"
 * />
 * 
 * Implementation Notes:
 * - Uses MUI Tooltip for hover functionality
 * - Implements ARIA role="note" for semantic meaning
 * - Provides tooltip content via aria-label for screen readers
 * - Handles alignment through styled component props
 * 
 * @component
 */

interface MetadataTagProps {
  /**
   * The text content displayed within the tag
   * This should be concise and clear as it's the primary visible content
   */
  label: string;

  /**
   * The text shown in the tooltip when hovering over the tag
   * Can include more detailed information than the label
   * Supports line breaks with \n characters
   */
  tooltip: string;

  /**
   * The alignment of the tag's content
   * Defaults to 'left' if not specified
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
}

export const MetadataTag = ({ 
  label, 
  tooltip,
  align = 'left'
}: MetadataTagProps) => {
  return (
    <Tooltip 
      title={tooltip}
      componentsProps={{
        tooltip: {
          // Allow tooltip content to wrap and respect line breaks
          sx: {
            maxWidth: '300px',
            whiteSpace: 'pre-line'
          }
        }
      }}
    >
      <TagContainer 
        role="note" 
        aria-label={tooltip}
        align={align}
      >
        {label}
      </TagContainer>
    </Tooltip>
  );
};

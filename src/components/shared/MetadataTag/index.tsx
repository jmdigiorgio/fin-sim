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
 * - Flexible positioning (inline or block)
 * - Customizable alignment options
 * - Accessible by default with ARIA attributes
 * - Theme-aware styling
 * 
 * Usage:
 * <MetadataTag 
 *   label="Version"
 *   tooltip="Current software version: 2.0.0"
 *   position="inline"
 *   align="left"
 * />
 * 
 * @component
 */

interface MetadataTagProps {
  /**
   * The text content displayed within the tag
   */
  label: string;

  /**
   * The text shown in the tooltip when hovering over the tag
   */
  tooltip: string;

  /**
   * The alignment of the tag
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

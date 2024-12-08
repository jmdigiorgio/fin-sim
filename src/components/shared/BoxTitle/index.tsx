/**
 * BoxTitle Component
 * 
 * A versatile title component used across the application for consistent section headings.
 * This component serves as the primary way to display hierarchical content structure
 * while maintaining consistent styling and spacing.
 * 
 * Features:
 * - Flexible alignment system (left, center, right) for different layout needs
 * - Customizable text styling through a unified textStyle prop
 * - Support for nested components (like MetadataTag) with proper spacing
 * - Maintains consistent vertical spacing with other components
 * - Automatically adapts to theme changes
 * 
 * Usage:
 * <BoxTitle 
 *   align="center"
 *   textStyle={{ size: '24px', weight: 700 }}
 * >
 *   Your Title Here
 * </BoxTitle>
 * 
 * @component
 */

import { TitleContainer, StyledTitle } from './styles';

interface BoxTitleProps {
  /**
   * Content to be rendered within the title component.
   * Can include text and other React components.
   */
  children: React.ReactNode;

  /**
   * Controls the horizontal alignment of the title and its children.
   * - 'left': Aligns to the start of the container (default)
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Optional styling configuration for the title text
   * @property {string} size - Font size (e.g., '20px', '1.5rem')
   * @property {number} weight - Font weight (e.g., 400, 600, 700)
   */
  textStyle?: {
    size?: string;
    weight?: number;
  };
}

export const BoxTitle = ({ 
  children, 
  align = 'left', 
  textStyle
}: BoxTitleProps) => {
  return (
    <TitleContainer align={align}>
      <StyledTitle style={{
        fontSize: textStyle?.size,
        fontWeight: textStyle?.weight,
      }}>
        {children}
      </StyledTitle>
    </TitleContainer>
  );
};

export default BoxTitle;
/**
 * ComponentTitle Component
 * 
 * This component provides a consistent title styling throughout the application.
 * It renders a heading with standardized typography and optional right-aligned content.
 * 
 * The ComponentTitle includes:
 * - Consistent font styling using Geist Sans
 * - Standard sizing and spacing
 * - Flexible layout with optional right content
 * - Proper semantic heading structure
 * 
 * Use this component when you need a section title that matches the application's
 * design system and potentially needs additional content aligned to the right.
 */

'use client'; // This component uses client-side features

// Import the styled components we created in styles.tsx
import { TitleContainer, StyledTitle } from './styles';

// Define what props our ComponentTitle can accept
interface ComponentTitleProps {
  children: React.ReactNode;    // The title text or elements
  rightContent?: React.ReactNode; // Optional content to display on the right
}

// Define our ComponentTitle component
// We use ({ children, rightContent }) to destructure the props
export const ComponentTitle = ({ children, rightContent }: ComponentTitleProps) => {
  // Return our title container with the title and optional right content
  return (
    <TitleContainer>
      <StyledTitle>{children}</StyledTitle>
      {rightContent}
    </TitleContainer>
  );
};

export default ComponentTitle;
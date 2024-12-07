/**
 * Box Component
 * 
 * This component serves as a basic container element throughout the application.
 * It provides a consistent visual style for grouping related content together.
 * 
 * The Box automatically sizes itself to fit its contents and includes:
 * - Subtle green background that changes with theme
 * - Rounded corners
 * - Light border
 * - Standard padding
 * 
 * Use this component when you need to visually group related elements together
 * or create a distinct section in the UI.
 */

'use client'; // This tells Next.js this is a client-side component, meaning it runs in the browser

// Import the styled component we created in styles.tsx
import { StyledBox } from './styles';

// Define what props (properties) our Box component can accept
// The ? means children is optional
interface BoxProps {
  children?: React.ReactNode; // ReactNode means it can contain any valid React content (text, other components, etc.)
}

// Define our Box component
// We use ({ children }) to destructure the children prop from the props object
// This is the same as writing (props) and then using props.children
export const Box = ({ children }: BoxProps) => {
  // Return our styled box with any children nested inside it
  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
};

// Make this component available for import in other files
export default Box;
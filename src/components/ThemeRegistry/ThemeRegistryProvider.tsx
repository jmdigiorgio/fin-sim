'use client';

import { useTheme } from '@/contexts/ThemeContext';
import ThemeRegistry from './ThemeRegistry';

export default function ThemeRegistryProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const { isDarkMode } = useTheme();
  
  return (
    <ThemeRegistry isDarkMode={isDarkMode}>
      {children}
    </ThemeRegistry>
  );
}
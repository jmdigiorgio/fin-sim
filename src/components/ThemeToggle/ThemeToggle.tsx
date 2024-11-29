'use client';

import { IconButton } from '@mui/material';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <IconButton onClick={toggleTheme} aria-label="toggle theme">
      {isDarkMode ? '🌙' : '☀️'}
    </IconButton>
  );
}

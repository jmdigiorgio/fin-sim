'use client';

import { useTheme } from '@/components/ThemeRegistry';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <IconButton 
      onClick={toggleTheme} 
      color="inherit"
      aria-label="toggle theme"
    >
      {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default ThemeToggle;

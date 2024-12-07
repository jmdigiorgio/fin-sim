'use client';

import { useSidePanel } from '@/components/layout/SidePanelContext';
import { HeaderContainer } from './styles';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const Header = () => {
  const { isOpen, togglePanel } = useSidePanel();
  const sidebarWidth = isOpen ? 240 : 64;

  return (
    <HeaderContainer sidebarWidth={sidebarWidth}>
      <IconButton 
        onClick={togglePanel}
        sx={{
          position: 'relative',
          transform: isOpen ? 'none' : 'rotate(180deg)',
          transition: 'transform 0.3s ease',
          opacity: 0.7,
          '&:hover': {
            opacity: 1,
            backgroundColor: 'transparent'
          }
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
    </HeaderContainer>
  );
};

export default Header;

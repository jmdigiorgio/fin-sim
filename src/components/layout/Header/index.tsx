'use client';

import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { useSidePanel } from '@/components/layout/SidePanelContext';
import { HeaderContainer } from './styles';

export const Header = () => {
  const { isOpen } = useSidePanel();
  const sidebarWidth = isOpen ? 240 : 64;

  return (
    <HeaderContainer sidebarWidth={sidebarWidth}>
      <ThemeToggle />
    </HeaderContainer>
  );
};

export default Header;

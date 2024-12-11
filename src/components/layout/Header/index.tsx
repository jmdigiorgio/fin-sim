'use client';

import { HeaderContainer } from './styles';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

export const Header = () => {
  const sidebarWidth = 64;
  const theme = useTheme();
  const logoSrc = theme.palette.mode === 'dark' 
    ? '/nest-fund-logos/nest-fund-v1-dark.svg'
    : '/nest-fund-logos/nest-fund-v1-light.svg';

  return (
    <HeaderContainer sidebarWidth={sidebarWidth}>
      <Image 
        src={logoSrc}
        alt="nest-fund-v1"
        width={120}
        height={32}
        priority
        style={{ opacity: 1.0 }}
      />
    </HeaderContainer>
  );
};

export default Header;

'use client';

import { ThemeToggle } from '@/components/ThemeToggle';
import Image from 'next/image';
import { HeaderContainer, LogoContainer, AppName } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image
          src="/favicon/logo-500x500.png"
          alt="MockVest Logo"
          width={40}
          height={40}
          className="logo"
        />
        <AppName>MockVest</AppName>
      </LogoContainer>
      <ThemeToggle />
    </HeaderContainer>
  );
};

export default Header;

'use client';

import { HeaderContainer, StyledTitle } from './styles';

export const Header = () => {
  const sidebarWidth = 64;

  return (
    <HeaderContainer sidebarWidth={sidebarWidth}>
      <StyledTitle>NestFund</StyledTitle>
    </HeaderContainer>
  );
};

export default Header;

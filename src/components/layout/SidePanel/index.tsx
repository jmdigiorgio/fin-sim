'use client';

import { IconButton } from '@mui/material';
import Image from 'next/image';
import { PanelContainer, PanelContent, LogoButton } from './styles';
import { useSidePanel } from '@/components/layout/SidePanelContext';
import { AppLogo } from '@/components/layout/AppLogo';
import { CollapseButton } from '@/components/shared/CollapseButton';

export const SidePanel = () => {
  const { isOpen, togglePanel } = useSidePanel();

  return (
    <PanelContainer isOpen={isOpen}>
      {isOpen ? (
        <>
          <AppLogo />
          <CollapseButton onClick={togglePanel} />
        </>
      ) : (
        <LogoButton>
          <IconButton onClick={togglePanel} color="inherit" aria-label="open panel">
            <Image
              src="/logo/logo-500x500.png"
              alt="NestFund Logo"
              width={40}
              height={40}
              className="logo"
            />
          </IconButton>
        </LogoButton>
      )}
      <PanelContent>
        {/* Content will go here later */}
      </PanelContent>
    </PanelContainer>
  );
};

export default SidePanel; 
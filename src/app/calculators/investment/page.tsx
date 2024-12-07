'use client';

import { ReturnCalc } from '@/components/calculators/ReturnCalc';
import { SidePanel } from '@/components/layout/SidePanel';
import { useSidePanel } from '@/components/layout/SidePanelContext';
import { styled } from '@mui/material/styles';

const PageContainer = styled('div')({
  display: 'flex',
  minHeight: '100vh',
});

const MainContent = styled('main', {
  shouldForwardProp: (prop) => prop !== 'sidebarWidth',
})<{ sidebarWidth: number }>(({ sidebarWidth }) => ({
  marginLeft: `${sidebarWidth}px`,
  flex: 1,
  padding: '32px',
  transition: 'margin-left 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  maxWidth: 'calc(1600px - ${sidebarWidth}px)',
  width: '100%'
}));

export default function InvestmentCalculator() {
  const { isOpen } = useSidePanel();
  const sidebarWidth = isOpen ? 240 : 64;

  return (
    <PageContainer>
      <SidePanel />
      <MainContent sidebarWidth={sidebarWidth}>
        <ReturnCalc />
      </MainContent>
    </PageContainer>
  );
} 
'use client';

import { ReturnCalc } from '@/components/calculators/ReturnCalc';
import { Header } from '@/components/layout/Header';
import { SidePanel } from '@/components/layout/SidePanel';
import { useSidePanel } from '@/components/layout/SidePanelContext';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { SvgIconComponent } from '@mui/icons-material';

const PageContainer = styled('div')({
  display: 'flex',
  minHeight: '100vh',
});

const MainContent = styled('main', {
  shouldForwardProp: (prop) => prop !== 'sidebarWidth',
})<{ sidebarWidth: number }>(({ sidebarWidth }) => ({
  marginLeft: `${sidebarWidth}px`,
  marginTop: '64px', // Header height
  flex: 1,
  padding: '32px',
  transition: 'margin-left 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
}));

export default function InvestmentCalculator() {
  const { isOpen } = useSidePanel();
  const sidebarWidth = isOpen ? 240 : 64;

  return (
    <PageContainer>
      <SidePanel />
      <Header 
        pageTitle="Return on Investment" 
        icon={TrendingUpIcon as SvgIconComponent}
        iconColor="#4caf50"
      />
      <MainContent sidebarWidth={sidebarWidth}>
        <ReturnCalc />
      </MainContent>
    </PageContainer>
  );
} 
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled('header', {
  shouldForwardProp: (prop) => prop !== 'sidebarWidth',
})<{ sidebarWidth: number }>(({ theme, sidebarWidth }) => ({
  position: 'fixed',
  top: 0,
  left: `${sidebarWidth}px`,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 24px',
  height: '64px',
  zIndex: 1000,
  transition: 'left 0.3s ease',
  backgroundColor: theme.palette.mode === 'dark' 
    ? '#1a1a1a'
    : '#f5f5f5',
  
  '@media (max-width: 600px)': {
    padding: '16px',
  }
}));

export const PageTitle = styled('h1')(({ theme }) => ({
  margin: 0,
  fontSize: '20px',
  fontWeight: 500,
  fontFamily: 'var(--font-geist-sans)',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.7)'
    : 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
}));

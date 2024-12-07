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

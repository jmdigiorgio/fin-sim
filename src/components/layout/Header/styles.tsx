import { styled } from '@mui/material/styles';

export const HeaderContainer = styled('header', {
  shouldForwardProp: (prop) => prop !== 'sidebarWidth',
})<{ sidebarWidth: number }>(({ sidebarWidth }) => ({
  position: 'fixed',
  top: 0,
  left: `${sidebarWidth}px`,
  right: 0,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '12px 24px',
  height: '64px',
  zIndex: 1000,
  transition: 'left 0.3s ease',
  backgroundColor: 'transparent',
  
  '@media (max-width: 600px)': {
    padding: '12px 16px',
  }
}));

export const StyledTitle = styled('h1')(({ theme }) => ({
  margin: 0,
  fontSize: '24px',
  fontWeight: 800,
  fontFamily: 'var(--font-geist-sans)',
  color: theme.palette.mode === 'dark' 
    ? '#33ffb8' 
    : '#1e8561',
}));

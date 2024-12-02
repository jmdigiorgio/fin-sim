import { styled } from '@mui/material/styles';

export const HeaderContainer = styled('header')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  zIndex: 1000,
  
  '@media (max-width: 600px)': {
    padding: '16px',
  }
});

export const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  
  '& .logo': {
    '@media (prefers-color-scheme: dark)': {
      filter: 'brightness(0.9)'
    }
  }
});

export const AppName = styled('span')({
  fontFamily: 'var(--font-geist-sans)',
  fontSize: '24px',
  fontWeight: 600,
  color: 'var(--foreground)'
});

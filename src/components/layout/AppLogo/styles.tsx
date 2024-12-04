import { styled } from '@mui/material/styles';

export const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  position: 'absolute',
  top: '20px',
  left: '20px',
  
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

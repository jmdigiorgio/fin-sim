import { styled } from '@mui/material/styles';

export const LabelContainer = styled('span')(({ theme }) => ({
  color: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.9)'
    : 'rgba(0, 0, 0, 0.9)',
  cursor: 'help',
  transition: 'opacity 0.2s',
  fontSize: '16px',
  fontFamily: 'var(--font-geist-sans)',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',

  '&:hover': {
    opacity: 0.7,
  }
}));
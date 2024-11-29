import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '600px',
  width: '100%',
  padding: '32px',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'transparent'
    : 'rgba(0, 0, 0, 0.03)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  borderRadius: '12px',
}));

export const InputRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
});

export const Label = styled('span')({
  fontFamily: 'var(--font-geist-sans)',
  fontSize: '14px',
  minWidth: '140px',
});

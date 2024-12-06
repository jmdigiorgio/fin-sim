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

export const InputGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '24px 0',
  borderBottom: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  '&:last-of-type': {
    borderBottom: 'none',
  }
}));

export const ResultsGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '24px',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  borderRadius: '8px',
  marginTop: '8px',
}));

export const InputRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
});

export const Label = styled('span')({
  fontFamily: 'var(--font-geist-sans)',
  fontSize: '16px',
  minWidth: '160px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
});

export const TitleRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  '& h2': {
    margin: 0,
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'var(--font-geist-sans)',
  }
});

export const ContentWrapper = styled('div')({
  display: 'flex',
  gap: '32px',
  width: '100%',
  maxWidth: '1200px',
  alignItems: 'flex-start'
});

export const ChartWrapper = styled('div')({
  width: '500px',
  minWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
});

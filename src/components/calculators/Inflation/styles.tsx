import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
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
    paddingBottom: 0
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
  '& > :last-child': {
    marginLeft: 'auto'
  }
});

export const Label = styled('span')({
  fontFamily: 'var(--font-geist-sans)',
  fontSize: '16px',
  minWidth: '240px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
});

export const TitleRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '24px',
  '& h2': {
    margin: 0,
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'var(--font-geist-sans)',
  }
});
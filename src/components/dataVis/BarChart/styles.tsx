import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ChartContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '24px',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  borderRadius: '12px',
  '& h2': {
    margin: '0 0 24px 0',
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'var(--font-geist-sans)',
  }
}));

export const TitleRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '20px 20px 0',
  '& h2': {
    margin: 0,
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'var(--font-geist-sans)',
  }
});

export const ChartContent = styled('div')({
  flex: 1,
  minHeight: 0,
  padding: '20px',
});

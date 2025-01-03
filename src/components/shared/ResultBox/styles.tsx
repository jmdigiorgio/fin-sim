import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  // Base styling
  padding: '12px 20px',
  borderRadius: '8px',
  fontFamily: 'var(--font-geist-sans)',
  fontSize: '18px',
  fontWeight: 500,
  textAlign: 'center',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(20, 20, 20, 1.0)'
    : 'rgba(245, 245, 245, 1.0)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  transition: 'color 0.2s ease',
  
  // Positive result styling
  '&.gain': {
    color: theme.palette.mode === 'dark' ? '#4caf50' : '#2e7d32'
  },
  
  // Negative result styling
  '&.loss': {
    color: theme.palette.mode === 'dark' ? '#f44336' : '#c62828'
  },

  // Warning/cautionary result styling
  '&.warning': {
    color: theme.palette.mode === 'dark' ? '#ffc107' : '#f57c00'
  }
}));

import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const CardContainer = styled(Paper)(({ theme }) => ({
  position: 'relative',
  padding: '24px',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.02)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  
  '&:hover': {
    transform: 'translateY(-4px)',
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.04)',
    '& .icon': {
      transform: 'scale(1.1)',
    }
  }
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '24px',
  right: '24px',
  color: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.5)'
    : 'rgba(0, 0, 0, 0.4)',
  '& .icon': {
    fontSize: '32px',
    transition: 'transform 0.2s ease',
  }
}));

export const Title = styled('h3')({
  margin: '0 0 8px 0',
  fontSize: '20px',
  fontWeight: 600,
  fontFamily: 'var(--font-geist-sans)',
});

export const Description = styled('p')(({ theme }) => ({
  margin: 0,
  fontSize: '14px',
  color: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.7)'
    : 'rgba(0, 0, 0, 0.6)',
  lineHeight: 1.5,
})); 
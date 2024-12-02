import { styled } from '@mui/material/styles';

export const TagContainer = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  padding: '0 6px',
  borderRadius: '8px',
  fontSize: '12px',
  color: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.7)'
    : 'rgba(0, 0, 0, 0.6)',
  cursor: 'help',
  transition: 'background-color 0.2s',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  marginLeft: '4px',
  marginRight: '4px',
  display: 'inline-block',
  lineHeight: '1.4',

  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.05)',
  }
})); 
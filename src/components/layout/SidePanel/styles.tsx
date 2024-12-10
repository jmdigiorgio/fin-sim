import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PanelContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  width: '64px',
  backgroundColor: theme.palette.mode === 'dark' 
    ? '#1a1a1a'
    : '#f5f5f5',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 0,
  borderRight: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
}));

export const PanelContent = styled(Box)({
  width: '100%',
  height: '100%',
  padding: '20px',
  paddingTop: '0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
});

export const BottomContainer = styled(Box)({
  position: 'absolute',
  bottom: '20px',
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px'
}); 
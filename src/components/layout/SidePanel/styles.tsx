import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PanelContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  width: isOpen ? '240px' : '64px',
  backgroundColor: theme.palette.mode === 'dark' 
    ? '#1a1a1a'
    : '#f5f5f5',
  transition: 'width 0.3s ease',
  zIndex: 1000,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '20px',
}));

export const PanelContent = styled(Box)({
  width: '240px',
  height: '100%',
  padding: '20px',
  transition: 'transform 0.3s ease',
});

export const CollapseButton = styled(Box)({
  position: 'absolute',
  top: '20px',
  right: '12px',
  transition: 'opacity 0.2s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.7,
  '&:hover': {
    opacity: 1,
  },
});

export const LogoButton = styled(Box)({
  height: '40px',
  width: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'opacity 0.2s ease',
  opacity: 0.7,
  '& .logo': {
    transition: 'transform 0.2s ease',
  },
  '&:hover': {
    opacity: 1,
    '& .logo': {
      transform: 'scale(1.05)',
    },
  },
}); 
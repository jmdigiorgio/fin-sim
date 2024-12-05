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
  transition: 'transform 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
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
  position: 'absolute',
  top: '20px',
  left: '12px',
  height: '40px',
  width: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'opacity 0.2s ease',
  opacity: 0.8,
  '& .MuiIconButton-root': {
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },
  '& .logo': {
    transition: 'transform 0.2s ease',
  },
  '&:hover': {
    opacity: 1,
    '& .logo': {
      transform: 'scale(1.05)',
    }
  }
}); 
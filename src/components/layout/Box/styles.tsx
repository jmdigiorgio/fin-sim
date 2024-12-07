/*
This is the styling for the Box component.
*/

import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => !['width', 'height'].includes(prop as string),
})<{ width: number; height: number | 'auto' }>(({ theme, width, height }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: `${width}px`,
  height: height === 'auto' ? 'auto' : `${height}px`,
  backgroundColor: theme.palette.mode === 'dark'
    ? 'transparent'
    : 'rgba(0, 0, 0, 0.03)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  borderRadius: '12px',
  transition: 'all 0.2s ease',
  position: 'relative',
}));

export const BoxHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  cursor: 'move',
  userSelect: 'none',
});

export const BoxDragHandle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isDragging',
})<{ isDragging: boolean }>(({ isDragging }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  cursor: 'ew-resize',
  opacity: isDragging ? 1 : 0.5,
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 1,
  },
}));

export const BoxContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isCollapsed',
})<{ isCollapsed: boolean }>(({ isCollapsed }) => ({
  padding: isCollapsed ? 0 : '24px',
  height: isCollapsed ? 0 : 'auto',
  overflow: 'hidden',
  opacity: isCollapsed ? 0 : 1,
  transition: 'all 0.3s ease',
  flex: isCollapsed ? 0 : 1,
}));

export const BoxResizeHandles = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  padding: '4px',
  
  '.height-handle': {
    cursor: 'ns-resize',
    display: 'flex',
    alignItems: 'center',
    opacity: 0.5,
    transition: 'opacity 0.2s ease',
    '&:hover': {
      opacity: 1,
    },
    '& svg': {
      transform: 'rotate(90deg)',
    }
  }
});
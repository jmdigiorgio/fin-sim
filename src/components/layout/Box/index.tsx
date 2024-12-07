/*
This is a reusable component that wraps other components and provides a consistent styling, layout, and functionality.
*/

'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { StyledBox, BoxHeader, BoxDragHandle, BoxContent, BoxResizeHandles } from './styles';

interface BoxProps {
  children?: React.ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}

export const Box = ({ 
  children, 
  defaultWidth = 600,
  defaultHeight = 400,
  minWidth = 400,
  maxWidth = 1200,
  minHeight = 200,
  maxHeight = 800
}: BoxProps) => {
  const [width, setWidth] = useState(defaultWidth);
  const [height, setHeight] = useState(defaultHeight);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDragging, setIsDragging] = useState<'width' | 'height' | null>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragStartDimensions = useRef({ width: 0, height: 0 });

  const handleDragStart = (direction: 'width' | 'height') => (e: React.MouseEvent) => {
    setIsDragging(direction);
    dragStart.current = { x: e.clientX, y: e.clientY };
    dragStartDimensions.current = { width, height };
    e.preventDefault();
  };

  const handleDrag = useCallback((e: MouseEvent) => {
    if (!isDragging) return;

    if (isDragging === 'width') {
      const deltaX = e.clientX - dragStart.current.x;
      const newWidth = Math.min(Math.max(
        dragStartDimensions.current.width + deltaX, 
        minWidth
      ), maxWidth);
      setWidth(newWidth);
    } else {
      const deltaY = e.clientY - dragStart.current.y;
      const newHeight = Math.min(Math.max(
        dragStartDimensions.current.height + deltaY, 
        minHeight
      ), maxHeight);
      setHeight(newHeight);
    }
  }, [isDragging, minWidth, maxWidth, minHeight, maxHeight]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(null);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
      
      return () => {
        window.removeEventListener('mousemove', handleDrag);
        window.removeEventListener('mouseup', handleDragEnd);
      };
    }
  }, [isDragging, handleDrag, handleDragEnd]);

  return (
    <StyledBox width={width} height={isCollapsed ? 'auto' : height}>
      <BoxHeader>
        <IconButton 
          onClick={() => setIsCollapsed(!isCollapsed)}
          size="small"
          sx={{ 
            transform: isCollapsed ? 'rotate(-90deg)' : 'none',
            transition: 'transform 0.2s ease'
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
        <BoxDragHandle 
          onMouseDown={handleDragStart('width')}
          isDragging={isDragging === 'width'}
        >
          <DragIndicatorIcon />
        </BoxDragHandle>
      </BoxHeader>
      <BoxContent isCollapsed={isCollapsed}>
        {children}
      </BoxContent>
      {!isCollapsed && (
        <BoxResizeHandles>
          <div 
            className="height-handle"
            onMouseDown={handleDragStart('height')}
          >
            <DragIndicatorIcon />
          </div>
        </BoxResizeHandles>
      )}
    </StyledBox>
  );
};

export default Box;
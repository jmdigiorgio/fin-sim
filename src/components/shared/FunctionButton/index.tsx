'use client';

import Link from 'next/link';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { useSidePanel } from '@/components/layout/SidePanelContext';
import { SxProps, Theme } from '@mui/material/styles';

interface FunctionButtonProps {
  href: string;
  icon: SvgIconComponent | React.ComponentType;
  label: string;
  tooltip?: string;
  sx?: SxProps<Theme>;
}

export const FunctionButton = ({ href, icon: Icon, label, tooltip, sx }: FunctionButtonProps) => {
  const { isOpen } = useSidePanel();

  const button = (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        href={href}
        sx={{
          minHeight: 48,
          px: 2.5,
          justifyContent: isOpen ? 'flex-start' : 'center',
          transition: 'all 0.2s ease',
          opacity: 0.8,
          '&:hover': {
            opacity: 1,
            backgroundColor: 'transparent'
          },
          ...sx
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: isOpen ? 3 : 'auto',
            ml: isOpen ? 0 : 'auto',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            '& .MuiSvgIcon-root': {
              fontSize: '40px',
              transition: 'transform 0.2s ease',
            },
            '.MuiListItemButton-root:hover &': {
              transform: isOpen ? 'translateX(4px)' : 'scale(1.1)'
            }
          }}
        >
          <Icon />
        </ListItemIcon>
        {isOpen && <ListItemText 
          primary={label} 
          sx={{
            '& .MuiListItemText-primary': {
              fontSize: '18px',
              fontWeight: 500
            }
          }}
        />}
      </ListItemButton>
    </ListItem>
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip} placement={isOpen ? 'right' : 'right-start'}>
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default FunctionButton; 
'use client';

import Link from 'next/link';
import { ListItem, ListItemButton, ListItemIcon, Tooltip } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { SxProps, Theme } from '@mui/material/styles';

interface FunctionButtonProps {
  href: string;
  icon: SvgIconComponent | React.ComponentType;
  tooltip?: string;
  sx?: SxProps<Theme>;
}

export const FunctionButton = ({ href, icon: Icon, tooltip, sx }: FunctionButtonProps) => {
  const button = (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        href={href}
        sx={{
          minHeight: 48,
          px: 2.5,
          justifyContent: 'center',
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
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            '& .MuiSvgIcon-root': {
              fontSize: '40px',
              transition: 'transform 0.2s ease',
            },
            '.MuiListItemButton-root:hover &': {
              transform: 'scale(1.1)'
            }
          }}
        >
          <Icon />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip} placement="right-start">
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default FunctionButton; 
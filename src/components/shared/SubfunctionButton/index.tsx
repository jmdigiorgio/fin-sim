import Link from 'next/link';
import { ListItemButton, ListItemText, Tooltip } from '@mui/material';
import { useSidePanel } from '@/components/layout/SidePanelContext';
import { SxProps, Theme } from '@mui/material/styles';
import { StyledListItem, StyledListItemText } from './styles';

interface SubfunctionButtonProps {
  href: string;
  label: string;
  tooltip?: string;
  sx?: SxProps<Theme>;
}

export const SubfunctionButton = ({ href, label, tooltip, sx }: SubfunctionButtonProps) => {
  const { isOpen } = useSidePanel();

  const button = (
    <StyledListItem disablePadding>
      <ListItemButton
        component={Link}
        href={href}
        sx={{
          minHeight: 36,
          px: 2.5,
          pl: isOpen ? 6 : 2.5,
          justifyContent: isOpen ? 'flex-start' : 'center',
          transition: 'all 0.2s ease',
          opacity: 0.7,
          '&:hover': {
            opacity: 1,
            backgroundColor: 'transparent'
          },
          ...sx
        }}
      >
        <StyledListItemText isOpen={isOpen}>
          <ListItemText 
            primary={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {label}
              </span>
            } 
          />
        </StyledListItemText>
      </ListItemButton>
    </StyledListItem>
  );

  if (tooltip && !isOpen) {
    return (
      <Tooltip title={tooltip} placement="right">
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default SubfunctionButton; 
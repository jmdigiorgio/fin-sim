'use client';

import { List, Divider } from '@mui/material';
import { PanelContainer, PanelContent, BottomContainer } from './styles';
import { FunctionButton } from '@/components/shared/FunctionButton';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import CalculateIcon from '@mui/icons-material/Calculate';
import CottageIcon from '@mui/icons-material/Cottage';
import { useTheme } from '@mui/material/styles';

export const SidePanel = () => {
  const theme = useTheme();

  const nestFundButtonStyle = {
    '& .MuiListItemIcon-root': {
      color: theme.palette.mode === 'dark' ? '#33ffb8' : '#1e8561',
    }
  };

  return (
    <PanelContainer>
      <PanelContent>
        <List sx={{ 
          width: '100%', 
          padding: 0,
          '& .MuiListItem-root': {
            width: '100%',
            justifyContent: 'center'
          }
        }}>
          <FunctionButton 
            href="/"
            icon={CottageIcon}
            tooltip="Home"
            sx={nestFundButtonStyle}
          />
          <Divider sx={{ my: 1 }} />
          <FunctionButton 
            href="/calculators/return-on-investment"
            icon={CalculateIcon}
            tooltip="Calculators"
          />
        </List>
      </PanelContent>
      <BottomContainer>
        <ThemeToggle />
      </BottomContainer>
    </PanelContainer>
  );
};

export default SidePanel; 
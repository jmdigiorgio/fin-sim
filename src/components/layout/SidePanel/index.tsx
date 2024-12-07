'use client';

import { List, Divider } from '@mui/material';
import { PanelContainer, PanelContent, BottomContainer, CollapseButtonContainer } from './styles';
import { useSidePanel } from '@/components/layout/SidePanelContext';
import { FunctionButton } from '@/components/shared/FunctionButton';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { CollapseButton } from '@/components/shared/CollapseButton';
import CalculateIcon from '@mui/icons-material/Calculate';
import CottageIcon from '@mui/icons-material/Cottage';
import { useTheme } from '@mui/material/styles';

export const SidePanel = () => {
  const { isOpen, togglePanel } = useSidePanel();
  const theme = useTheme();

  const nestFundButtonStyle = {
    '& .MuiListItemIcon-root': {
      color: theme.palette.mode === 'dark' ? '#33ffb8' : '#1e8561',
    },
    '& .MuiListItemText-primary': {
      color: theme.palette.mode === 'dark' ? '#33ffb8' : '#1e8561',
    }
  };

  return (
    <PanelContainer isOpen={isOpen}>
      <CollapseButtonContainer>
        <CollapseButton onClick={togglePanel} collapsed={!isOpen} />
      </CollapseButtonContainer>
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
            label="NestFund"
            tooltip="Home"
            sx={nestFundButtonStyle}
          />
          <Divider sx={{ my: 1 }} />
          <FunctionButton 
            href="/calculators"
            icon={CalculateIcon}
            label="Calculators"
            tooltip={isOpen ? "Investments, Loans, Mortgages, etc." : "Calculators"}
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
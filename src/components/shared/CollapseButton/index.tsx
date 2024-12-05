import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ButtonContainer } from './styles';

interface CollapseButtonProps {
  onClick: () => void;
  collapsed?: boolean;
}

export const CollapseButton = ({ onClick, collapsed }: CollapseButtonProps) => {
  return (
    <ButtonContainer collapsed={collapsed}>
      <IconButton onClick={onClick} color="inherit" aria-label="collapse panel">
        <ChevronLeftIcon sx={{ 
          transform: collapsed ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.3s ease'
        }} />
      </IconButton>
    </ButtonContainer>
  );
};

export default CollapseButton; 
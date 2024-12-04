import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ButtonContainer } from '@/components/shared/CollapseButton/styles';

interface CollapseButtonProps {
  onClick: () => void;
}

export const CollapseButton = ({ onClick }: CollapseButtonProps) => {
  return (
    <ButtonContainer>
      <IconButton onClick={onClick} color="inherit" aria-label="collapse panel">
        <ChevronLeftIcon />
      </IconButton>
    </ButtonContainer>
  );
};

export default CollapseButton; 
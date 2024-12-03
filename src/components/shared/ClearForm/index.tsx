import { Tooltip } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { StyledIconButton } from './styles';

interface ClearFormProps {
  onClear: () => void;
}

export const ClearForm = ({ onClear }: ClearFormProps) => {
  return (
    <Tooltip title="Clear form">
      <StyledIconButton
        onClick={onClear}
        aria-label="clear form"
        size="small"
      >
        <RestartAltIcon />
      </StyledIconButton>
    </Tooltip>
  );
};

export default ClearForm;

import { Tooltip } from '@mui/material';
import { LabelContainer } from './styles';

interface LabelTagProps {
  label: string;
  tooltip: string;
}

export const LabelTag = ({ label, tooltip }: LabelTagProps) => {
  return (
    <Tooltip title={tooltip}>
      <LabelContainer>
        {label}
      </LabelContainer>
    </Tooltip>
  );
};
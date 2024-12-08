import { Tooltip } from '@mui/material';
import { LabelContainer } from './styles';

interface LabelTagProps {
  label: string;
  tooltip: string;
}

export const LabelTag = ({ label, tooltip }: LabelTagProps) => {
  return (
    <Tooltip 
      title={tooltip}
      componentsProps={{
        tooltip: {
          sx: {
            maxWidth: '300px',
            whiteSpace: 'pre-line'
          }
        }
      }}
    >
      <LabelContainer>
        {label}
      </LabelContainer>
    </Tooltip>
  );
};
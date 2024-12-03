import { Tooltip } from '@mui/material';
import { TagContainer } from './styles';

interface MetadataTagProps {
  label: string;
  tooltip: string;
}

export const MetadataTag = ({ label, tooltip }: MetadataTagProps) => {
  return (
    <Tooltip title={tooltip}>
      <TagContainer role="note" aria-label={tooltip}>
        {label}
      </TagContainer>
    </Tooltip>
  );
};

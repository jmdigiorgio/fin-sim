import { styled } from '@mui/material/styles';
import { ListItem } from '@mui/material';

export const StyledListItem = styled(ListItem)({
  padding: 0,
  width: '100%',
});

export const StyledListItemText = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>(({ isOpen }) => ({
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? 'visible' : 'hidden',
  transition: 'all 0.2s ease',
  '& .MuiListItemText-primary': {
    fontSize: '16px',
    fontWeight: 400
  }
})); 
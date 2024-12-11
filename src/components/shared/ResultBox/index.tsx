'use client';

import { StyledPaper } from './styles';

interface ResultBoxProps {
  children: React.ReactNode;
  type?: 'gain' | 'loss' | 'neutral' | 'warning';
}

export const ResultBox = ({ children, type = 'neutral' }: ResultBoxProps) => {
  return (
    <StyledPaper 
      elevation={0}
      className={type}
    >
      {children}
    </StyledPaper>
  );
};

export default ResultBox;

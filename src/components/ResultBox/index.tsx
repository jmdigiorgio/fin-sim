'use client';

import { StyledPaper } from './styles';

interface ResultBoxProps {
  children: React.ReactNode;
}

export const ResultBox = ({ children }: ResultBoxProps) => {
  return (
    <StyledPaper elevation={0}>
      {children}
    </StyledPaper>
  );
};

export default ResultBox;

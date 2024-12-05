'use client';

import { SvgIconComponent } from '@mui/icons-material';
import { CardContainer, IconWrapper, Title, Description } from '@/components/shared/FeatureCard/styles';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: SvgIconComponent;
  color?: string;
}

export const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  color = '#1a73e8'  // default to primary color
}: FeatureCardProps) => {
  return (
    <CardContainer elevation={0}>
      <IconWrapper>
        <Icon className="icon" sx={{ color }} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default FeatureCard; 
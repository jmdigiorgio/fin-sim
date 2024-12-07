import { CompoundingFrequency } from './types';

export const calculateEffectiveRate = (
  annualRate: number,
  compoundingFrequency: CompoundingFrequency
): number => {
  const rate = annualRate / 100;

  if (compoundingFrequency === CompoundingFrequency.CONTINUOUS) {
    return Math.exp(rate) - 1;
  }

  return Math.pow(1 + rate / compoundingFrequency, compoundingFrequency) - 1;
};

export const calculateCompoundInterest = (
  principal: number,
  effectiveRate: number,
  years: number
): number => {
  if (years <= 0 || principal <= 0) return principal;
  
  if (years > 30) {
    return principal * Math.exp(Math.log(1 + effectiveRate) * years);
  }
  
  return principal * Math.pow(1 + effectiveRate, years);
}; 
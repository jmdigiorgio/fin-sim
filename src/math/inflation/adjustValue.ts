import { InflationInputs, InflationResult } from './types';

export const calculateInflationAdjustedValue = ({
  amount,
  years,
  inflationRate
}: InflationInputs): InflationResult => {
  if (years === 0 || inflationRate === 0) {
    return {
      adjustedAmount: amount,
      totalLostValue: 0
    };
  }

  // Use continuous compounding for more accurate long-term calculations
  const adjustedAmount = amount * Math.exp(-inflationRate * years / 100);
  
  return {
    adjustedAmount: Math.round(adjustedAmount * 100) / 100,
    totalLostValue: Math.round((amount - adjustedAmount) * 100) / 100
  };
}; 
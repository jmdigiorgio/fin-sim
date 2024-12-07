import { InvestmentInputs, InvestmentResult } from './types';

export const calculateInvestmentReturns = ({
  initialInvestment,
  monthlyContribution,
  annualRate,
  years,
  annualContributionIncrease = 0
}: Omit<InvestmentInputs, 'compoundingFrequency' | 'contributionFrequency'>): InvestmentResult => {
  if (years <= 0) {
    return {
      finalAmount: initialInvestment,
      totalInvested: initialInvestment,
      totalGains: 0
    };
  }

  // Calculate the annual contribution total
  const annualContribution = monthlyContribution * 12;
  
  // For annual compounding:
  // 1. Grow initial investment annually
  const finalInitial = initialInvestment * Math.pow(1 + (annualRate / 100), years);
  
  // 2. Handle recurring contributions with annual compounding
  let finalRecurring = 0;
  for (let year = 0; year < years; year++) {
    // Add this year's contributions
    const yearContribution = annualContribution * Math.pow(1 + annualContributionIncrease / 100, year);
    // Grow it for remaining years
    finalRecurring += yearContribution * Math.pow(1 + (annualRate / 100), years - year);
  }

  const finalAmount = finalInitial + finalRecurring;
  const totalInvested = initialInvestment + (annualContribution * years);
  
  return {
    finalAmount: Math.round(finalAmount * 100) / 100,
    totalInvested: Math.round(totalInvested * 100) / 100,
    totalGains: Math.round((finalAmount - totalInvested) * 100) / 100
  };
}; 
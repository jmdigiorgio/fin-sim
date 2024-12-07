import { InvestmentInputs, ChartDataPoint } from './types';

export const generateChartData = (inputs: InvestmentInputs): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  const annualContribution = inputs.monthlyContribution * 12;
  const annualRate = inputs.annualRate / 100;
  
  let previousTotal = inputs.initialInvestment;
  
  for (let year = 1; year <= inputs.years; year++) {
    // 1. Calculate this year's investment amount
    const yearlyInvestment = year === 1 ? 
      inputs.initialInvestment + annualContribution : 
      annualContribution;
    
    // 2. Calculate total after this year's growth
    const totalAfterGrowth = previousTotal * (1 + annualRate) + annualContribution;
    
    // 3. Calculate this year's interest
    const yearlyInterest = totalAfterGrowth - (previousTotal + annualContribution);
    
    previousTotal = totalAfterGrowth;
    
    data.push({
      period: `Year ${year}`,
      investment: Math.round(yearlyInvestment),
      interest: Math.round(yearlyInterest)
    });
  }
  
  return data;
};
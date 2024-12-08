import { useMemo } from 'react';
import { roiInputs } from '../collectors/roiCollector';

interface ROIResults {
  totalInvested: number;
  totalReturn: number;
  totalValue: number;
  inflationAdjusted: number;
  savingsAlternative: number;
}

// Helper to convert recurring interval to number of contributions per year
const contributionsPerYear = {
  'DAILY': 365,
  'WEEKLY': 52,
  'MONTHLY': 12,
  'QUARTERLY': 4,
  'SEMI_ANNUALLY': 2,
  'ANNUALLY': 1
};

export function useROIProcessor(inputs: roiInputs): ROIResults {
  const results = useMemo(() => {
    // Convert string inputs to numbers, defaulting to 0 for empty strings
    const initialInvestment = Number(inputs.initialInvestment) || 0;
    const recurringAmount = Number(inputs.recurringAmount) || 0;
    const annualIncreasePercent = Number(inputs.annualIncreasePercent) || 0;
    const returnRate = Number(inputs.returnRate) || 0;
    const duration = Number(inputs.duration) || 0;
    const inflationRate = Number(inputs.inflationRate) || 0;
    
    // Calculate total invested and savings alternative
    let totalInvested = initialInvestment;
    let currentRecurringAmount = recurringAmount;
    let savingsAlternative = initialInvestment * Math.pow(1 - (inflationRate / 100), duration);
    
    // Calculate investment value with returns
    let totalValue = initialInvestment * Math.pow(1 + (returnRate / 100), duration);

    // For each year
    for (let year = 0; year < duration; year++) {
      // Add all contributions for this year
      const contributionsThisYear = currentRecurringAmount * contributionsPerYear[inputs.recurringInterval];
      totalInvested += contributionsThisYear;
      
      // Add contributions to savings (inflation adjusted)
      const remainingYears = duration - year - 1;
      const inflationAdjustedContributions = contributionsThisYear * Math.pow(1 - (inflationRate / 100), remainingYears);
      savingsAlternative += inflationAdjustedContributions;

      // Add contributions to investment value with returns for remaining time
      const valueWithReturns = contributionsThisYear * Math.pow(1 + (returnRate / 100), remainingYears);
      totalValue += valueWithReturns;

      // Increase the recurring amount for next year
      currentRecurringAmount *= (1 + (annualIncreasePercent / 100));
    }

    // Calculate inflation adjusted total value
    const inflationAdjusted = totalValue * Math.pow(1 - (inflationRate / 100), duration);

    return {
      totalInvested: Math.round(totalInvested * 100) / 100,
      totalReturn: Math.round((totalValue - totalInvested) * 100) / 100,
      totalValue: Math.round(totalValue * 100) / 100,
      inflationAdjusted: Math.round(inflationAdjusted * 100) / 100,
      savingsAlternative: Math.round(savingsAlternative * 100) / 100
    };
  }, [inputs]);

  return results;
}

import { useState } from 'react';

export interface roiInputs {
  // Core investment inputs
  initialInvestment: string;      // One-time investment amount
  recurringAmount: string;        // Regular contribution amount
  recurringInterval: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUALLY' | 'ANNUALLY';
  
  // Growth inputs
  annualIncreasePercent: string;  // Percentage increase in contributions
  returnRate: string;             // Expected rate of return
  
  // Time and adjustment inputs
  duration: string;               // Investment duration in years
  inflationRate: string;          // Expected inflation rate
}

const DEFAULT_VALUES: roiInputs = {
  initialInvestment: '',
  recurringAmount: '',
  recurringInterval: 'MONTHLY',
  annualIncreasePercent: '',
  returnRate: '',
  duration: '',
  inflationRate: ''
};

export function useROICollector() {
  const [inputs, setInputs] = useState<roiInputs>(DEFAULT_VALUES);

  // Individual update handlers
  const updateInitialInvestment = (value: string) => {
    setInputs(prev => ({ ...prev, initialInvestment: value }));
  };

  const updateRecurringAmount = (value: string) => {
    setInputs(prev => ({ ...prev, recurringAmount: value }));
  };

  const updateRecurringInterval = (value: roiInputs['recurringInterval']) => {
    setInputs(prev => ({ ...prev, recurringInterval: value }));
  };

  const updateAnnualIncreasePercent = (value: string) => {
    setInputs(prev => ({ ...prev, annualIncreasePercent: value }));
  };

  const updateReturnRate = (value: string) => {
    setInputs(prev => ({ ...prev, returnRate: value }));
  };

  const updateDuration = (value: string) => {
    setInputs(prev => ({ ...prev, duration: value }));
  };

  const updateInflationRate = (value: string) => {
    setInputs(prev => ({ ...prev, inflationRate: value }));
  };

  // Reset all inputs to default values
  const resetInputs = () => {
    setInputs(DEFAULT_VALUES);
  };

  return {
    values: inputs,
    updateInitialInvestment,
    updateRecurringAmount,
    updateRecurringInterval,
    updateAnnualIncreasePercent,
    updateReturnRate,
    updateDuration,
    updateInflationRate,
    resetInputs
  };
}

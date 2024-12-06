import { ReturnCalcInputs, ReturnCalcResult, ChartDataPoint } from './types';

export const calculateReturns = (inputs: ReturnCalcInputs): ReturnCalcResult => {
  // Early return if essential values are invalid
  if (inputs.timeValue <= 0) {
    return {
      finalAmount: inputs.initialInvestment,
      totalInvested: inputs.initialInvestment,
      totalGains: 0
    };
  }

  // Convert all time periods to years for consistency
  const yearsMultiplier = {
    10: 1/365,  // days
    20: 1/52,   // weeks
    30: 1/12,   // months
    40: 1,      // years
  }[inputs.timeUnit] || 1;

  const years = inputs.timeValue * yearsMultiplier;

  // Convert frequencies to annual multiplier
  const frequencyMultiplier: { [key: number]: number } = {
    10: 1,      // annual
    20: 2,      // semiannual
    30: 4,      // quarterly
    40: 12,     // monthly
    50: 52,     // weekly
    60: 365,    // daily
    70: Infinity // continuous
  };

  const recurringFreq = frequencyMultiplier[inputs.recurringFrequency] || 12;
  const returnFreq = frequencyMultiplier[inputs.returnRateFrequency] || 1;

  // Calculate effective annual rate
  const effectiveRate = (returnFreq === Infinity)
    ? Math.exp(inputs.returnRate / 100) - 1
    : Math.pow(1 + (inputs.returnRate / 100) / returnFreq, returnFreq) - 1;

  const r = effectiveRate;
  const t = years;
  const P = inputs.initialInvestment;
  const PMT = inputs.recurringInvestment;

  // Special case for 0% return rate
  if (r === 0) {
    const totalPeriods = recurringFreq === Infinity 
      ? t 
      : t * recurringFreq;
    return {
      finalAmount: P + (PMT * totalPeriods),
      totalInvested: P + (PMT * totalPeriods),
      totalGains: 0
    };
  }

  // Calculate final amount
  let finalAmount = P * Math.pow(1 + r, t); // Initial investment with compound interest

  if (PMT > 0) {
    if (recurringFreq === Infinity) {
      // Continuous payments
      finalAmount += PMT * ((Math.exp(r * t) - 1) / r);
    } else {
      // Discrete payments
      const ratePerPeriod = r / recurringFreq;
      const periods = t * recurringFreq;
      finalAmount += PMT * ((Math.pow(1 + ratePerPeriod, periods) - 1) / ratePerPeriod);
    }
  }

  // Calculate total invested amount
  const totalInvested = P + (PMT * (recurringFreq === Infinity ? t : recurringFreq * t));
  
  return {
    finalAmount: Math.round(finalAmount * 100) / 100,
    totalInvested: Math.round(totalInvested * 100) / 100,
    totalGains: Math.round((finalAmount - totalInvested) * 100) / 100
  };
};

export const generateChartData = (inputs: ReturnCalcInputs): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  const periods = 10;
  
  let previousResult = calculateReturns({
    ...inputs,
    timeValue: 0
  });
  
  for (let i = 1; i <= periods; i++) {
    const periodInputs = {
      ...inputs,
      timeValue: (inputs.timeValue / periods) * i
    };
    
    const result = calculateReturns(periodInputs);
    
    // Calculate period-specific values
    const periodInvestment = result.totalInvested - previousResult.totalInvested;
    const periodInterest = (result.finalAmount - result.totalInvested) - 
                          (previousResult.finalAmount - previousResult.totalInvested);
    
    previousResult = result;
    
    const period = `${Math.round(periodInputs.timeValue)}${
      inputs.timeUnit === 10 ? 'd' : 
      inputs.timeUnit === 20 ? 'w' : 
      inputs.timeUnit === 30 ? 'm' : 'y'
    }`;
    
    data.push({
      period,
      investment: Math.round(periodInvestment * 100) / 100,
      interest: Math.round(periodInterest * 100) / 100
    });
  }
  
  return data;
};

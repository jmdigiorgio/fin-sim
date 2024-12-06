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
  const increaseFreq = inputs.periodicIncreaseFrequency ? 
    frequencyMultiplier[inputs.periodicIncreaseFrequency] || 1 : 1;

  // Calculate effective annual rate
  const effectiveRate = (returnFreq === Infinity)
    ? Math.exp(inputs.returnRate / 100) - 1
    : Math.pow(1 + (inputs.returnRate / 100) / returnFreq, returnFreq) - 1;

  const r = effectiveRate;
  const t = years;
  const P = inputs.initialInvestment;
  let finalAmount = P * Math.pow(1 + r, t); // Initial investment with compound interest
  let totalInvested = P;

  // Handle recurring investments with periodic increases
  if (inputs.recurringInvestment > 0) {
    const baseAmount = inputs.recurringInvestment;
    const periodsPerYear = recurringFreq === Infinity ? 365 : recurringFreq;
    
    for (let year = 0; year < years; year++) {
      // Calculate the recurring investment amount for this year
      let currentAmount = baseAmount;
      if (inputs.enablePeriodicIncrease && year > 0) {
        const increasePeriods = Math.floor(year * (increaseFreq / 1)); // Convert to increase frequency periods
        if (inputs.periodicIncreaseAmount) {
          currentAmount += inputs.periodicIncreaseAmount * increasePeriods;
        } else if (inputs.periodicIncreasePercent) {
          currentAmount *= Math.pow(1 + inputs.periodicIncreasePercent / 100, increasePeriods);
        }
      }

      // Calculate contributions and returns for this year
      if (recurringFreq === Infinity) {
        // Continuous contributions
        const yearStart = year;
        const yearEnd = Math.min(year + 1, years);
        finalAmount += currentAmount * ((Math.exp(r * (years - yearStart)) - 
                                      Math.exp(r * (years - yearEnd))) / r);
        totalInvested += currentAmount * (yearEnd - yearStart);
      } else {
        // Discrete contributions
        const paymentsThisYear = year + 1 > years ? 
          (years % 1) * periodsPerYear : 
          periodsPerYear;
        
        for (let i = 0; i < paymentsThisYear; i++) {
          const timeToMaturity = years - year - i/periodsPerYear;
          finalAmount += currentAmount * Math.pow(1 + r, timeToMaturity);
          totalInvested += currentAmount;
        }
      }
    }
  }

  return {
    finalAmount: Math.round(finalAmount * 100) / 100,
    totalInvested: Math.round(totalInvested * 100) / 100,
    totalGains: Math.round((finalAmount - totalInvested) * 100) / 100
  };
};

export const generateChartData = (inputs: ReturnCalcInputs): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  const periods = 10;
  
  // Calculate the time increment for each period
  const timeIncrement = inputs.timeValue / periods;
  
  let previousResult = calculateReturns({
    ...inputs,
    timeValue: 0
  });
  
  for (let i = 1; i <= periods; i++) {
    // Calculate current period
    const currentTime = timeIncrement * i;
    const currentResult = calculateReturns({
      ...inputs,
      timeValue: currentTime
    });

    // For this period only:
    const periodInvestment = currentResult.totalInvested - previousResult.totalInvested;
    const periodInterest = (currentResult.finalAmount - currentResult.totalInvested) - 
                          (previousResult.finalAmount - previousResult.totalInvested);
    
    // Store current result for next iteration
    previousResult = currentResult;
    
    // Format period label
    const period = `${Math.round(currentTime)}${
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

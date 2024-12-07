export interface InvestmentInputs {
  // Initial one-time investment amount
  initialInvestment: number;
  
  // The contribution amount per period (will be converted to monthly internally)
  monthlyContribution: number;
  
  // Annual rate of return (as a percentage, e.g. 7 for 7%)
  annualRate: number;
  
  // Investment duration in years
  years: number;
  
  // How often interest is compounded
  compoundingFrequency: CompoundingFrequency;
  
  // How often contributions are made
  contributionFrequency: CompoundingFrequency;
  
  // Optional: Annual percentage increase in contribution amount
  annualContributionIncrease?: number;
}

export interface InvestmentResult {
  finalAmount: number;      // Total value at the end
  totalInvested: number;    // Sum of all contributions
  totalGains: number;       // Profit (finalAmount - totalInvested)
}

export interface ChartDataPoint {
  period: string;
  investment: number;
  interest: number;
}

export enum CompoundingFrequency {
  ANNUALLY = 1,            // Once per year
  SEMI_ANNUALLY = 2,       // Twice per year
  QUARTERLY = 4,           // Four times per year
  MONTHLY = 12,            // Twelve times per year
  WEEKLY = 52,            // 52 times per year
  DAILY = 365,            // 365 times per year
  CONTINUOUS = Infinity    // Continuous compounding
} 
export interface ReturnCalcInputs {
  initialInvestment: number;
  recurringInvestment: number;
  recurringFrequency: number;
  timeValue: number;
  timeUnit: number;
  returnRate: number;
  returnRateFrequency: number;
}

export interface ReturnCalcResult {
  finalAmount: number;
  totalInvested: number;
  totalGains: number;
}

export interface ChartDataPoint {
  period: string;
  investment: number;
  interest: number;
}

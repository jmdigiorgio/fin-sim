export interface InflationInputs {
  amount: number;
  years: number;
  inflationRate: number;
}

export interface InflationResult {
  adjustedAmount: number;
  totalLostValue: number;
} 
export interface ChartDataPoint {
  period: string;
  investment: number;
  interest: number;
}

export interface ChartFormatOptions {
  prefix?: string;
  suffix?: string;
  locale?: string;
} 
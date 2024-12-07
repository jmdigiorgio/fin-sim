import { CompoundingFrequency } from './types';

export const MIN_YEARS = 1;
export const MAX_YEARS = 100;
export const DEFAULT_COMPOUNDING = CompoundingFrequency.MONTHLY;
export const DEFAULT_YEARS = 30;

export const FREQUENCY_MAP = {
  ANNUAL: CompoundingFrequency.ANNUALLY,
  SEMI_ANNUAL: CompoundingFrequency.SEMI_ANNUALLY,
  QUARTERLY: CompoundingFrequency.QUARTERLY,
  MONTHLY: CompoundingFrequency.MONTHLY,
  WEEKLY: CompoundingFrequency.WEEKLY,
  DAILY: CompoundingFrequency.DAILY,
  CONTINUOUS: CompoundingFrequency.CONTINUOUS
}; 
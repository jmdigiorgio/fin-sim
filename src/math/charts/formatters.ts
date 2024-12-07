import { ChartFormatOptions } from './types';

export const formatChartValue = (
  value: number, 
  options: ChartFormatOptions = {}
): string => {
  const { 
    prefix = '$', 
    suffix = '', 
    locale = 'en-US' 
  } = options;
  
  return `${prefix}${value.toLocaleString(locale)}${suffix}`;
};

export const getDefaultChartConfig = () => ({
  margin: {
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
  },
  gridStroke: '3 3',
  height: '100%',
  width: '100%'
}); 
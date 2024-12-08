import { useEffect } from 'react';
import { roiInputs } from '../collectors/roiCollector';
import { useROIProcessor } from '../processors/roiProcessor';

interface ROIPublisherProps {
  inputs: roiInputs;
  onUpdateResults: (results: {
    totalInvested: string;
    totalReturn: string;
    totalValue: string;
    inflationAdjusted: string;
    savingsAlternative: string;
  }) => void;
}

export function useROIPublisher({ inputs, onUpdateResults }: ROIPublisherProps) {
  // Get results from processor
  const results = useROIProcessor(inputs);

  // Format and publish results whenever they change
  useEffect(() => {
    onUpdateResults({
      totalInvested: `$${results.totalInvested.toLocaleString()}`,
      totalReturn: `$${results.totalReturn.toLocaleString()}`,
      totalValue: `$${results.totalValue.toLocaleString()}`,
      inflationAdjusted: `$${results.inflationAdjusted.toLocaleString()}`,
      savingsAlternative: `$${results.savingsAlternative.toLocaleString()}`
    });
  }, [results, onUpdateResults]);
}

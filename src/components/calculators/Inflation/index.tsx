import { useState } from 'react';
import { Container, InputGroup, InputRow, Label, TitleRow, ResultsGroup } from './styles';
import { PercentageInput } from '@/components/shared/PercentageInput';
import { LabelTag } from '@/components/shared/LabelTag';
import { ResultBox } from '@/components/shared/ResultBox';
import { MetadataTag } from '@/components/shared/MetadataTag';
import{ calculateInflationAdjustedValue } from '@/math/inflation/adjustValue';

interface InflationProps {
  finalAmount: number;
  totalInvested: number;
  timeValue: number;
  timeUnit: number;
}

export const Inflation = ({ finalAmount, totalInvested, timeValue, timeUnit }: InflationProps) => {
  const [inflationRate, setInflationRate] = useState('0');

  // Calculate years based on time unit
  const yearsMultiplier = {
    10: 1/365,  // days
    20: 1/52,   // weeks
    30: 1/12,   // months
    40: 1,      // years
  }[timeUnit] || 1;

  const years = timeValue * yearsMultiplier;

  // Calculate inflation-adjusted values using the new utility
  const finalAmountAdjusted = calculateInflationAdjustedValue({
    amount: finalAmount,
    years,
    inflationRate: Number(inflationRate)
  });

  const investedAmountAdjusted = calculateInflationAdjustedValue({
    amount: totalInvested,
    years,
    inflationRate: Number(inflationRate)
  });

  // Get time unit label
  const timeUnitLabel = {
    10: 'days',
    20: 'weeks',
    30: 'months',
    40: 'years',
  }[timeUnit] || 'years';

  return (
    <Container>
      <TitleRow>
        <div>
          <h2>Adjust for Inflation</h2>
          <p style={{ margin: 0 }}>
            <MetadataTag 
              label="purchasing power"
              tooltip="Inflation reduces the purchasing power of money over time. $100 today will buy less in the future."
            />
            <MetadataTag 
              label="historical average"
              tooltip="The US historical average inflation rate is around 2-3% per year."
            />
          </p>
        </div>
      </TitleRow>

      <InputGroup>
        <InputRow>
          <Label>
            <LabelTag 
              label="Inflation Rate"
              tooltip="The expected average annual rate of inflation over your investment period."
            />
            :
          </Label>
          <PercentageInput
            value={inflationRate}
            onChange={setInflationRate}
            placeholder="0"
          />
        </InputRow>
      </InputGroup>

      <ResultsGroup>
        <InputRow>
          <Label>
            <LabelTag 
              label="Total Invested"
              tooltip="The total amount you invested over the entire period"
            />
            :
          </Label>
          <ResultBox type="neutral">
            ${Math.round(totalInvested).toLocaleString()}
          </ResultBox>
        </InputRow>

        <InputRow>
          <Label>
            <LabelTag 
              label="Final Amount"
              tooltip="The value of your investment before adjusting for inflation"
            />
            :
          </Label>
          <ResultBox type="neutral">
            ${Math.round(finalAmount).toLocaleString()}
          </ResultBox>
        </InputRow>

        <InputRow>
          <Label>
            <LabelTag 
              label="Adjusted for Inflation"
              tooltip={`The real purchasing power of your investment in ${timeValue} ${timeUnitLabel}, adjusted for inflation`}
            />
            :
          </Label>
          <ResultBox type="loss">
            ${Math.round(finalAmountAdjusted.adjustedAmount).toLocaleString()}
          </ResultBox>
        </InputRow>

        <InputRow>
          <Label>
            <LabelTag 
              label="If you'd just saved the money"
              tooltip={`What your total invested amount would be worth in ${timeValue} ${timeUnitLabel} if you had just saved without any returns`}
            />
            :
          </Label>
          <ResultBox type="loss">
            ${Math.round(investedAmountAdjusted.adjustedAmount).toLocaleString()}
          </ResultBox>
        </InputRow>
      </ResultsGroup>
    </Container>
  );
};

export default Inflation;
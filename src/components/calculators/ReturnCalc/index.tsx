import { Container, InputRow, Label, TitleRow, InputGroup, ResultsGroup, ContentWrapper, ChartWrapper } from './styles';
import { MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { Dropdown } from '@/components/shared/Dropdown';
import { MoneyInput } from '@/components/shared/MoneyInput';
import { NumberInput } from '@/components/shared/NumberInput';
import { PercentageInput } from '@/components/shared/PercentageInput';
import { ResultBox } from '@/components/shared/ResultBox';
import { calculateInvestmentReturns } from '@/math/investment/recurringInvestment';
import { generateChartData } from '@/math/investment/chartData';
import { useState, useMemo } from 'react';
import { ClearForm } from '@/components/shared/ClearForm';
import { MetadataTag } from '@/components/shared/MetadataTag';
import { LabelTag } from '@/components/shared/LabelTag';
import { BarChart } from '@/components/dataVis/BarChart';
import { CompoundingFrequency, InvestmentResult, InvestmentInputs } from '@/math/investment/types';
import { Inflation } from '@/components/calculators/Inflation';

const DEFAULT_VALUES = {
  initialInvestment: '',
  recurringInvestment: '',
  years: '',
  returnRate: '',
  recurringFrequency: CompoundingFrequency.MONTHLY,
  returnRateFrequency: CompoundingFrequency.ANNUALLY,
  periodicIncreasePercent: '',
};

export const ReturnCalc = () => {
  const [initialInvestment, setInitialInvestment] = useState(DEFAULT_VALUES.initialInvestment);
  const [recurringInvestment, setRecurringInvestment] = useState(DEFAULT_VALUES.recurringInvestment);
  const [years, setYears] = useState(DEFAULT_VALUES.years);
  const [returnRate, setReturnRate] = useState(DEFAULT_VALUES.returnRate);
  const [recurringFrequency, setRecurringFrequency] = useState(DEFAULT_VALUES.recurringFrequency);
  const [returnRateFrequency, setReturnRateFrequency] = useState(DEFAULT_VALUES.returnRateFrequency);
  const [enablePeriodicIncrease, setEnablePeriodicIncrease] = useState(false);
  const [periodicIncreasePercent, setPeriodicIncreasePercent] = useState('0');

  const result = useMemo((): InvestmentResult => {
    const periodicAmount = parseFloat(recurringInvestment) || 0;
    
    const monthlyEquivalent = periodicAmount * (recurringFrequency / CompoundingFrequency.MONTHLY);

    const inputs: InvestmentInputs = {
      initialInvestment: parseFloat(initialInvestment) || 0,
      monthlyContribution: monthlyEquivalent,
      years: Math.max(parseFloat(years) || 0, 0),
      annualRate: parseFloat(returnRate) || 0,
      compoundingFrequency: returnRateFrequency,
      contributionFrequency: recurringFrequency,
      annualContributionIncrease: enablePeriodicIncrease ? 
        (parseFloat(periodicIncreasePercent) || 0) : 0
    };
    
    return calculateInvestmentReturns(inputs);
  }, [
    initialInvestment, 
    recurringInvestment, 
    years, 
    returnRate,
    returnRateFrequency,
    recurringFrequency,
    enablePeriodicIncrease,
    periodicIncreasePercent
  ]);

  const chartData = useMemo(() => {
    const monthlyEquivalent = (parseFloat(recurringInvestment) || 0) * 
      (CompoundingFrequency.MONTHLY / recurringFrequency);

    const inputs = {
      initialInvestment: parseFloat(initialInvestment) || 0,
      monthlyContribution: monthlyEquivalent,
      years: Math.max(parseFloat(years) || 0, 0),
      annualRate: parseFloat(returnRate) || 0,
      compoundingFrequency: returnRateFrequency,
      contributionFrequency: recurringFrequency,
      annualContributionIncrease: enablePeriodicIncrease ? 
        (parseFloat(periodicIncreasePercent) || 0) : 0
    };
    
    return generateChartData(inputs);
  }, [
    initialInvestment, 
    recurringInvestment, 
    years, 
    returnRate,
    returnRateFrequency,
    recurringFrequency,
    enablePeriodicIncrease,
    periodicIncreasePercent
  ]);

  return (
    <ContentWrapper>
      <Container>
        <TitleRow>
          <div>
            <h2>Return on Investment</h2>
            <p style={{ margin: 0 }}>
              <MetadataTag 
                label="average return"
                tooltip="This calculator uses an average rate of return over the entire period. In reality, returns will fluctuate year-to-year."
              />
              <MetadataTag 
                label={enablePeriodicIncrease ? "variable recurring investment" : "stable recurring investment"}
                tooltip={enablePeriodicIncrease 
                  ? "Your recurring investment amount will increase with time. This is best practice."
                  : "This calculator assumes you'll maintain the same recurring investment amount throughout the entire period. In practice, you should increase your contributions over time to account for salary increases and inflation."
                }
              />
              <MetadataTag 
                label="not adjusted for inflation"
                tooltip="The results do not account for the effects of inflation on purchasing power. Every year, your money is worth less than the year before."
              />
            </p>
          </div>
          <ClearForm onClear={() => {
            setInitialInvestment(DEFAULT_VALUES.initialInvestment);
            setRecurringInvestment(DEFAULT_VALUES.recurringInvestment);
            setYears(DEFAULT_VALUES.years);
            setReturnRate(DEFAULT_VALUES.returnRate);
            setRecurringFrequency(DEFAULT_VALUES.recurringFrequency);
            setReturnRateFrequency(DEFAULT_VALUES.returnRateFrequency);
            setEnablePeriodicIncrease(false);
            setPeriodicIncreasePercent(DEFAULT_VALUES.periodicIncreasePercent);
          }} />
        </TitleRow>
        
        <InputGroup>
          <InputRow>
            <Label>
              <LabelTag 
                label="Initial Investment"
                tooltip="A one-time, initial investment to fund your account."
              />
              :
            </Label>
            <MoneyInput
              value={initialInvestment}
              onChange={setInitialInvestment}
            />
          </InputRow>
        </InputGroup>

        <InputGroup>
          <InputRow>
            <Label>
              <LabelTag 
                label="Recurring Investment"
                tooltip="The amount of money you plan on repeatedly investing and the frequency at which you'll invest it."
              />
              :
            </Label>
            <MoneyInput
              value={recurringInvestment}
              onChange={setRecurringInvestment}
            />
          </InputRow>

          <InputRow>
            <Label>
              <LabelTag 
                label="Contribution Frequency"
                tooltip="How often you'll invest"
              />
              :
            </Label>
            <Dropdown
              value={recurringFrequency}
              onChange={(e) => setRecurringFrequency(Number(e.target.value))}
            >
              <MenuItem value={CompoundingFrequency.ANNUALLY}>Annual</MenuItem>
              <MenuItem value={CompoundingFrequency.SEMI_ANNUALLY}>Semiannual</MenuItem>
              <MenuItem value={CompoundingFrequency.QUARTERLY}>Quarterly</MenuItem>
              <MenuItem value={CompoundingFrequency.MONTHLY}>Monthly</MenuItem>
              <MenuItem value={CompoundingFrequency.WEEKLY}>Weekly</MenuItem>
              <MenuItem value={CompoundingFrequency.DAILY}>Daily</MenuItem>
            </Dropdown>
          </InputRow>

          <InputRow sx={{ paddingLeft: '160px', marginTop: '8px' }}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={enablePeriodicIncrease}
                  onChange={(e) => setEnablePeriodicIncrease(e.target.checked)}
                  size="small"
                />
              }
              label={
                <LabelTag 
                  label="Increase periodically"
                  tooltip="Automatically increase your recurring investment amount at regular intervals."
                />
              }
            />
          </InputRow>

          {enablePeriodicIncrease && (
            <InputRow>
              <Label>
                <LabelTag 
                  label="Annual Increase"
                  tooltip="The percentage by which your recurring investment will increase each year"
                />
                :
              </Label>
              <PercentageInput
                value={periodicIncreasePercent}
                onChange={setPeriodicIncreasePercent}
                placeholder="0"
                min={0}
                max={100}
              />
              <span>% per year</span>
            </InputRow>
          )}

          <InputRow>
            <Label>
              <LabelTag 
                label="Investment Period"
                tooltip="How long you plan to invest (in years)"
              />
              :
            </Label>
            <NumberInput
              value={years}
              onChange={setYears}
              min={1}
              max={100}
            />
            <span>Years</span>
          </InputRow>

          <InputRow>
            <Label>
              <LabelTag 
                label="Return Rate"
                tooltip="The expected rate of return on your investments and the frequency with which you expect the interest to compound. Historical S&P 500 performance is 10% annually."
              />
              :
            </Label>
            <PercentageInput
              value={returnRate}
              onChange={setReturnRate}
            />
            <Dropdown
              value={returnRateFrequency}
              onChange={(e) => setReturnRateFrequency(Number(e.target.value))}
            >
              <MenuItem value={CompoundingFrequency.ANNUALLY}>Annual</MenuItem>
              <MenuItem value={CompoundingFrequency.SEMI_ANNUALLY}>Semiannual</MenuItem>
              <MenuItem value={CompoundingFrequency.QUARTERLY}>Quarterly</MenuItem>
              <MenuItem value={CompoundingFrequency.MONTHLY}>Monthly</MenuItem>
              <MenuItem value={CompoundingFrequency.WEEKLY}>Weekly</MenuItem>
              <MenuItem value={CompoundingFrequency.DAILY}>Daily</MenuItem>
              <MenuItem value={CompoundingFrequency.CONTINUOUS}>Continuous</MenuItem>
            </Dropdown>
          </InputRow>
        </InputGroup>

        <ResultsGroup>
          <InputRow>
            <Label>
              <LabelTag 
                label="Final Amount"
                tooltip="The sum of the money that you invested and the return on investment."
              />
              :
            </Label>
            <ResultBox type="neutral">
              ${result.finalAmount.toLocaleString()}
            </ResultBox>
          </InputRow>

          <InputRow>
            <Label>
              <LabelTag 
                label="Total Invested"
                tooltip="All the money you put into the investment."
              />
              :
            </Label>
            <ResultBox type="neutral">
              ${result.totalInvested.toLocaleString()}
            </ResultBox>
          </InputRow>

          <InputRow>
            <Label>
              <LabelTag 
                label="Total Gains"
                tooltip="Your return on investment."
              />
              :
            </Label>
            <ResultBox type={result.totalGains >= 0 ? 'gain' : 'loss'}>
              ${result.totalGains.toLocaleString()}
            </ResultBox>
          </InputRow>
        </ResultsGroup>
      </Container>
      <ChartWrapper>
        <BarChart data={chartData} />
        <Inflation 
          finalAmount={result.finalAmount}
          totalInvested={result.totalInvested}
          timeValue={parseFloat(years) || 0}
          timeUnit={1}
        />
      </ChartWrapper>
    </ContentWrapper>
  );
};

export default ReturnCalc;

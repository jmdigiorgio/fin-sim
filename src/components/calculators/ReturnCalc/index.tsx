import { Container, InputRow, Label, TitleRow, InputGroup, ResultsGroup, ContentWrapper, ChartWrapper } from './styles';
import { MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { Dropdown } from '@/components/shared/Dropdown';
import { MoneyInput } from '@/components/shared/MoneyInput';
import { NumberInput } from '@/components/shared/NumberInput';
import { PercentageInput } from '@/components/shared/PercentageInput';
import { ResultBox } from '@/components/shared/ResultBox';
import { calculateReturns, generateChartData } from '@/utils/calculators/ReturnCalcMath';
import { useState, useMemo } from 'react';
import { ClearForm } from '@/components/shared/ClearForm';
import { MetadataTag } from '@/components/shared/MetadataTag';
import { LabelTag } from '@/components/shared/LabelTag';
import { BarChart } from '@/components/dataVis/BarChart';
import { useTheme } from '@mui/material/styles';

const DEFAULT_VALUES = {
  initialInvestment: '',
  recurringInvestment: '',
  timeValue: '',
  timeUnit: 40,
  returnRate: '',
  recurringFrequency: 40,
  returnRateFrequency: 10,
  periodicIncreaseAmount: '',
  periodicIncreasePercent: '',
  periodicIncreaseFrequency: 10
};

export const ReturnCalc = () => {
  const theme = useTheme();
  const [initialInvestment, setInitialInvestment] = useState(DEFAULT_VALUES.initialInvestment);
  const [recurringInvestment, setRecurringInvestment] = useState(DEFAULT_VALUES.recurringInvestment);
  const [timeValue, setTimeValue] = useState(DEFAULT_VALUES.timeValue);
  const [timeUnit, setTimeUnit] = useState(DEFAULT_VALUES.timeUnit);
  const [returnRate, setReturnRate] = useState(DEFAULT_VALUES.returnRate);
  const [recurringFrequency, setRecurringFrequency] = useState(DEFAULT_VALUES.recurringFrequency);
  const [returnRateFrequency, setReturnRateFrequency] = useState(DEFAULT_VALUES.returnRateFrequency);
  const [enablePeriodicIncrease, setEnablePeriodicIncrease] = useState(false);
  const [periodicIncreaseAmount, setPeriodicIncreaseAmount] = useState('');
  const [periodicIncreasePercent, setPeriodicIncreasePercent] = useState('');
  const [periodicIncreaseFrequency, setPeriodicIncreaseFrequency] = useState(10);

  const result = useMemo(() => {
    const inputs = {
      initialInvestment: parseFloat(initialInvestment) || 0,
      recurringInvestment: parseFloat(recurringInvestment) || 0,
      recurringFrequency,
      timeValue: Math.max(parseFloat(timeValue) || 0, 0),
      timeUnit,
      returnRate: parseFloat(returnRate) || 0,
      returnRateFrequency,
      enablePeriodicIncrease,
      periodicIncreaseAmount: parseFloat(periodicIncreaseAmount) || 0,
      periodicIncreasePercent: parseFloat(periodicIncreasePercent) || 0,
      periodicIncreaseFrequency
    };
    
    return calculateReturns(inputs);
  }, [initialInvestment, recurringInvestment, recurringFrequency, 
      timeValue, timeUnit, returnRate, returnRateFrequency,
      enablePeriodicIncrease, periodicIncreaseAmount,
      periodicIncreasePercent, periodicIncreaseFrequency]);

  const chartData = useMemo(() => {
    const inputs = {
      initialInvestment: parseFloat(initialInvestment) || 0,
      recurringInvestment: parseFloat(recurringInvestment) || 0,
      recurringFrequency,
      timeValue: Math.max(parseFloat(timeValue) || 0, 0),
      timeUnit,
      returnRate: parseFloat(returnRate) || 0,
      returnRateFrequency,
      enablePeriodicIncrease,
      periodicIncreaseAmount: parseFloat(periodicIncreaseAmount) || 0,
      periodicIncreasePercent: parseFloat(periodicIncreasePercent) || 0,
      periodicIncreaseFrequency
    };
    
    return generateChartData(inputs);
  }, [initialInvestment, recurringInvestment, recurringFrequency, 
      timeValue, timeUnit, returnRate, returnRateFrequency,
      enablePeriodicIncrease, periodicIncreaseAmount,
      periodicIncreasePercent, periodicIncreaseFrequency]);

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
            setTimeValue(DEFAULT_VALUES.timeValue);
            setTimeUnit(DEFAULT_VALUES.timeUnit);
            setReturnRate(DEFAULT_VALUES.returnRate);
            setRecurringFrequency(DEFAULT_VALUES.recurringFrequency);
            setReturnRateFrequency(DEFAULT_VALUES.returnRateFrequency);
            setEnablePeriodicIncrease(false);
            setPeriodicIncreaseAmount(DEFAULT_VALUES.periodicIncreaseAmount);
            setPeriodicIncreasePercent(DEFAULT_VALUES.periodicIncreasePercent);
            setPeriodicIncreaseFrequency(DEFAULT_VALUES.periodicIncreaseFrequency);
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
            <Dropdown 
              value={recurringFrequency}
              onChange={(e) => setRecurringFrequency(Number(e.target.value))}
            >
              <MenuItem value={10}>Annual</MenuItem>
              <MenuItem value={20}>Semiannual</MenuItem>
              <MenuItem value={30}>Quarterly</MenuItem>
              <MenuItem value={40}>Monthly</MenuItem>
              <MenuItem value={50}>Weekly</MenuItem>
              <MenuItem value={60}>Daily</MenuItem>
              <MenuItem value={70}>Continuously</MenuItem>
            </Dropdown>
            <MoneyInput
              value={recurringInvestment}
              onChange={setRecurringInvestment}
            />
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
            <InputRow sx={{ paddingLeft: '160px', marginTop: '8px' }}>
              <MoneyInput
                value={periodicIncreaseAmount}
                onChange={setPeriodicIncreaseAmount}
                placeholder="0.00"
              />
              <span style={{ 
                margin: '0 8px',
                color: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.7)' 
                  : 'rgba(0, 0, 0, 0.6)'
              }}>
                or
              </span>
              <PercentageInput
                value={periodicIncreasePercent}
                onChange={setPeriodicIncreasePercent}
                placeholder="0"
              />
              <Dropdown 
                value={periodicIncreaseFrequency}
                onChange={(e) => setPeriodicIncreaseFrequency(Number(e.target.value))}
              >
                <MenuItem value={10}>Annual</MenuItem>
                <MenuItem value={20}>Semiannual</MenuItem>
                <MenuItem value={30}>Quarterly</MenuItem>
                <MenuItem value={40}>Monthly</MenuItem>
                <MenuItem value={50}>Weekly</MenuItem>
                <MenuItem value={60}>Daily</MenuItem>
              </Dropdown>
            </InputRow>
          )}

          <InputRow>
            <Label>
              <LabelTag 
                label="Time Period"
                tooltip="How long you plan on committing to investing and not withdrawing your funds."
              />
              :
            </Label>
            <NumberInput
              value={timeValue}
              onChange={setTimeValue}
            />
            <Dropdown
              value={timeUnit}
              onChange={(e) => setTimeUnit(Number(e.target.value))}
            >
              <MenuItem value={10}>Days</MenuItem>
              <MenuItem value={20}>Weeks</MenuItem>
              <MenuItem value={30}>Months</MenuItem>
              <MenuItem value={40}>Years</MenuItem>
            </Dropdown>
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
              <MenuItem value={10}>Annual</MenuItem>
              <MenuItem value={20}>Semiannual</MenuItem>
              <MenuItem value={30}>Quarterly</MenuItem>
              <MenuItem value={40}>Monthly</MenuItem>
              <MenuItem value={50}>Weekly</MenuItem>
              <MenuItem value={60}>Daily</MenuItem>
              <MenuItem value={70}>Continuously</MenuItem>
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
      </ChartWrapper>
    </ContentWrapper>
  );
};

export default ReturnCalc;

import { Container, InputRow, Label } from './styles';
import { MenuItem } from '@mui/material';
import { Dropdown } from '@/components/Dropdown';
import { MoneyInput } from '@/components/MoneyInput';
import { NumberInput } from '@/components/NumberInput';
import { PercentageInput } from '@/components/PercentageInput';
import { ResultBox } from '@/components/ResultBox';
import { useState } from 'react';

export const ReturnCalc = () => {
  const [initialInvestment, setInitialInvestment] = useState('1000');
  const [recurringInvestment, setRecurringInvestment] = useState('500');
  const [timeValue, setTimeValue] = useState('5');
  const [timeUnit, setTimeUnit] = useState(40);
  const [returnRate, setReturnRate] = useState('12');

  return (
    <Container>
      <h2>Return on Investment</h2>
      <InputRow>
        <Label>Initial Investment:</Label>
        <MoneyInput
          value={initialInvestment}
          onChange={setInitialInvestment}
        />
      </InputRow>

      <InputRow>
        <Label>Recurring Investment:</Label>
        <Dropdown defaultValue={10}>
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

      <InputRow>
        <Label>Investment Duration:</Label>
        <NumberInput
          value={timeValue}
          onChange={setTimeValue}
        />
        <Dropdown value={timeUnit} onChange={(event) => setTimeUnit(Number(event.target.value))}>
          <MenuItem value={10}>Days</MenuItem>
          <MenuItem value={20}>Weeks</MenuItem>
          <MenuItem value={30}>Months</MenuItem>
          <MenuItem value={40}>Years</MenuItem>
        </Dropdown>
      </InputRow>

      <InputRow>
        <Label>Expected Return Rate:</Label>
        <Dropdown defaultValue={10}>
          <MenuItem value={10}>Annual</MenuItem>
          <MenuItem value={20}>Semiannual</MenuItem>
          <MenuItem value={30}>Quarterly</MenuItem>
          <MenuItem value={40}>Monthly</MenuItem>
          <MenuItem value={50}>Weekly</MenuItem>
          <MenuItem value={60}>Daily</MenuItem>
          <MenuItem value={70}>Continuously</MenuItem>
        </Dropdown>
        <PercentageInput
          value={returnRate}
          onChange={setReturnRate}
        />
      </InputRow>

      <ResultBox>$1,234,567.89</ResultBox>
    </Container>
  );
};

export default ReturnCalc;

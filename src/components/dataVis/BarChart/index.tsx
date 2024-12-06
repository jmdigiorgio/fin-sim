import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { styled } from '@mui/material/styles';

const ChartContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '400px',
  padding: '20px',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'transparent'
    : 'rgba(0, 0, 0, 0.03)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  borderRadius: '12px',
}));

interface DataPoint {
  period: string;
  investment: number;
  interest: number;
}

interface BarChartProps {
  data: DataPoint[];
}

export const BarChart = ({ data }: BarChartProps) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip 
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
          />
          <Legend />
          <Bar dataKey="investment" name="Periodic Investment" fill="#8884d8" />
          <Bar dataKey="interest" name="Interest Earned" fill="#82ca9d" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default BarChart; 
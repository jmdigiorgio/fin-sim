import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer, TitleRow } from '@/components/dataVis/BarChart/styles';

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
      <TitleRow>
        <h2>Investment Growth Over Time</h2>
      </TitleRow>
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
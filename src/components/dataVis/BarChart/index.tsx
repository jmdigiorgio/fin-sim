import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { ChartContainer } from './styles';
import { ChartDataPoint } from '@/math/charts/types';

interface BarChartProps {
  data: ChartDataPoint[];
  title?: string;
}

export const BarChart = ({ 
  data, 
  title = 'Investment Growth Over Time' 
}: BarChartProps) => {
  return (
    <ChartContainer>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
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
          <Bar dataKey="investment" name="Investment" fill="#8884d8" />
          <Bar dataKey="interest" name="Interest" fill="#82ca9d" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default BarChart; 
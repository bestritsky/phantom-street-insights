
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, LineChart as LineChartIcon } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

// Mock data for sentiment analysis
const sentimentData = [
  { name: 'Apr 22', score: 78 },
  { name: 'Apr 23', score: 82 },
  { name: 'Apr 24', score: 75 },
  { name: 'Apr 25', score: 68 },
  { name: 'Apr 26', score: 62 },
  { name: 'Apr 27', score: 59 },
  { name: 'Apr 28', score: 65 },
  { name: 'Apr 29', score: 71 },
];

const SentimentAnalysis: React.FC = () => {
  return (
    <Card className="hover-glow col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Sentiment Analysis Trend</span>
          <LineChartIcon className="h-5 w-5 text-finance-accent-blue" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#E5E7EB' }}
              labelStyle={{ color: '#F9FAFB' }}
            />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              activeDot={{ r: 8 }} 
            />
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Media Sentiment</span>
            <div className="flex items-center">
              <span className="text-lg font-medium">Positive</span>
              <TrendingUp className="h-4 w-4 text-finance-chart-green ml-2" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Social Media</span>
            <div className="flex items-center">
              <span className="text-lg font-medium">Neutral</span>
              <TrendingDown className="h-4 w-4 text-finance-chart-red ml-2" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Investor Sentiment</span>
            <div className="flex items-center">
              <span className="text-lg font-medium">Positive</span>
              <TrendingUp className="h-4 w-4 text-finance-chart-green ml-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysis;

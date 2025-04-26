
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartBarBig, ArrowUp, ArrowDown } from 'lucide-react';

// Mock data for market indices
const generateMockIndices = () => [
  {
    id: 1,
    name: 'S&P 500',
    value: '4,783.45',
    change: '+15.28',
    changePercent: '+0.32%',
    isUp: true,
    chartData: Array(12).fill(0).map((_, i) => ({ value: 4700 + Math.random() * 100 }))
  },
  {
    id: 2,
    name: 'Dow Jones',
    value: '38,239.98',
    change: '+89.37',
    changePercent: '+0.23%',
    isUp: true,
    chartData: Array(12).fill(0).map((_, i) => ({ value: 38100 + Math.random() * 200 }))
  },
  {
    id: 3,
    name: 'Nasdaq',
    value: '15,927.90',
    change: '-28.98',
    changePercent: '-0.18%',
    isUp: false,
    chartData: Array(12).fill(0).map((_, i) => ({ value: 15800 + Math.random() * 200 }))
  },
  {
    id: 4,
    name: 'Russell 2000',
    value: '2,003.67',
    change: '+9.47',
    changePercent: '+0.48%',
    isUp: true,
    chartData: Array(12).fill(0).map((_, i) => ({ value: 1980 + Math.random() * 40 }))
  }
];

const MarketOverview: React.FC = () => {
  const marketIndices = generateMockIndices();
  
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium flex items-center">
          <ChartBarBig className="h-5 w-5 mr-2" />
          Market Overview
        </h2>
        <span className="text-xs text-muted-foreground">Live data • Updated just now</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {marketIndices.map((index) => (
          <Card key={index.id} className="hover-glow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{index.name}</p>
                  <p className="text-xl font-bold">{index.value}</p>
                  <div className="flex items-center mt-1">
                    {index.isUp ? (
                      <ArrowUp className="h-3 w-3 text-finance-chart-green mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 text-finance-chart-red mr-1" />
                    )}
                    <span className={`text-xs ${index.isUp ? 'text-finance-chart-green' : 'text-finance-chart-red'}`}>
                      {index.change} ({index.changePercent})
                    </span>
                  </div>
                </div>
                <div className="h-12 w-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={index.chartData}>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1A1F2C', 
                          borderColor: '#333',
                          borderRadius: '0.375rem',
                          display: 'none' // Hide tooltip for these small charts
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={index.isUp ? '#22C55E' : '#EF4444'} 
                        strokeWidth={2} 
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;

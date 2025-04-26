
import React, { useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock data for stock prices
const generateMockData = (days: number, trend: 'up' | 'down' | 'mixed') => {
  const data = [];
  let baseValue = 150;
  
  for (let i = 0; i < days; i++) {
    let change;
    if (trend === 'up') {
      change = (Math.random() * 5) - 1; // Mostly up
    } else if (trend === 'down') {
      change = (Math.random() * 5) - 4; // Mostly down
    } else {
      change = (Math.random() * 8) - 4; // Mixed
    }
    
    baseValue += change;
    if (baseValue < 100) baseValue = 100;
    
    const volume = Math.floor(Math.random() * 500000) + 100000;
    
    data.push({
      date: new Date(2025, 3, 10 + i).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      price: parseFloat(baseValue.toFixed(2)),
      volume
    });
  }
  
  return data;
};

const StockChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'1D' | '1W' | '1M' | '3M' | '1Y'>('1M');
  const [stockData, setStockData] = useState(() => generateMockData(30, 'mixed'));
  
  const getTimeRangeData = (range: string) => {
    switch(range) {
      case '1D':
        return generateMockData(1, 'up');
      case '1W':
        return generateMockData(7, 'down');
      case '1M':
        return generateMockData(30, 'mixed');
      case '3M':
        return generateMockData(90, 'up');
      case '1Y':
        return generateMockData(365, 'up');
      default:
        return generateMockData(30, 'mixed');
    }
  };
  
  const handleRangeChange = (range: '1D' | '1W' | '1M' | '3M' | '1Y') => {
    setTimeRange(range);
    setStockData(getTimeRangeData(range));
  };
  
  const firstPrice = stockData[0]?.price || 0;
  const lastPrice = stockData[stockData.length - 1]?.price || 0;
  const priceDifference = lastPrice - firstPrice;
  const percentChange = ((priceDifference / firstPrice) * 100).toFixed(2);
  const isPositive = priceDifference >= 0;
  
  return (
    <Card className="chart-container hover-glow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>TSLA - Tesla Inc.</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-bold">${lastPrice.toFixed(2)}</span>
              <span className={`${isPositive ? 'text-finance-chart-green' : 'text-finance-chart-red'} flex items-center`}>
                {isPositive ? '▲' : '▼'} {Math.abs(priceDifference).toFixed(2)} ({percentChange}%)
              </span>
            </div>
          </div>
          <div className="flex space-x-1">
            {(['1D', '1W', '1M', '3M', '1Y'] as const).map(range => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => handleRangeChange(range)}
                className={`text-xs ${timeRange === range ? 'bg-finance-accent-blue' : ''}`}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={stockData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={isPositive ? "#22C55E" : "#EF4444"} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={isPositive ? "#22C55E" : "#EF4444"} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 10 }} 
                tickFormatter={(value) => {
                  if (timeRange === '1D' || timeRange === '1W' || stockData.length <= 10) {
                    return value;
                  }
                  // Show fewer ticks for longer ranges
                  const idx = stockData.findIndex(item => item.date === value);
                  return idx % Math.ceil(stockData.length / 10) === 0 ? value : '';
                }}
              />
              <YAxis 
                domain={['dataMin - 5', 'dataMax + 5']} 
                tick={{ fontSize: 10 }}
                orientation="right"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1F2C', 
                  borderColor: '#333',
                  borderRadius: '0.375rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#999' }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
              />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke={isPositive ? "#22C55E" : "#EF4444"} 
                fillOpacity={1}
                fill="url(#colorPrice)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="h-32 w-full mt-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={stockData}
              margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <XAxis dataKey="date" tick={{ fontSize: 10 }} />
              <YAxis 
                tick={{ fontSize: 10 }}
                orientation="right"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: '#1A1F2C', 
                  borderColor: '#333',
                  borderRadius: '0.375rem'
                }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#999' }}
                formatter={(value: number) => [new Intl.NumberFormat().format(value), 'Volume']}
              />
              <Bar dataKey="volume" fill="#3B82F6" fillOpacity={0.6} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockChart;

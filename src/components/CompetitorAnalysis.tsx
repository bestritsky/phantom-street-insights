
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Mock data for competitor analysis
const competitorData = [
  {
    name: 'Tesla',
    revenue: 23.35,
    marketShare: 65,
    growthRate: 37,
    color: '#8B5CF6'
  },
  {
    name: 'Rivian',
    revenue: 4.23,
    marketShare: 12,
    growthRate: 28,
    color: '#3B82F6'
  },
  {
    name: 'Lucid',
    revenue: 2.87,
    marketShare: 8,
    growthRate: 18,
    color: '#0EA5E9'
  },
  {
    name: 'Ford EV',
    revenue: 3.15,
    marketShare: 9,
    growthRate: 12,
    color: '#06B6D4'
  },
  {
    name: 'Others',
    revenue: 2.10,
    marketShare: 6,
    growthRate: 8,
    color: '#22D3EE'
  }
];

const CompetitorAnalysis: React.FC = () => {
  return (
    <Card className="hover-glow">
      <CardHeader>
        <CardTitle>Competitor Analysis - EV Market</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-3 text-gray-400">Market Share (%)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={competitorData}
                  margin={{ top: 0, right: 20, left: 30, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#333" />
                  <XAxis type="number" tick={{ fontSize: 12 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={60} />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: '#1A1F2C', 
                      borderColor: '#333',
                      borderRadius: '0.375rem'
                    }}
                    formatter={(value: number) => [`${value}%`, 'Market Share']}
                  />
                  <Bar dataKey="marketShare" radius={[0, 4, 4, 0]}>
                    {competitorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-3 text-gray-400">Annual Revenue (B$)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={competitorData}
                  margin={{ top: 0, right: 20, left: 30, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#333" />
                  <XAxis type="number" tick={{ fontSize: 12 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={60} />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: '#1A1F2C', 
                      borderColor: '#333',
                      borderRadius: '0.375rem'
                    }}
                    formatter={(value: number) => [`$${value}B`, 'Revenue']}
                  />
                  <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
                    {competitorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3 text-gray-400">Annual Growth Rate (%)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={competitorData}
                margin={{ top: 0, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C', 
                    borderColor: '#333',
                    borderRadius: '0.375rem'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Growth Rate']}
                />
                <Bar dataKey="growthRate" radius={[4, 4, 0, 0]}>
                  {competitorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetitorAnalysis;

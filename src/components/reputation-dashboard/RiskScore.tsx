
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, ShieldAlert } from 'lucide-react';
import { 
  PieChart, 
  Pie,
  Cell,
  ResponsiveContainer 
} from 'recharts';

const RiskScore: React.FC = () => {
  return (
    <Card className="hover-glow col-span-1 overflow-hidden border-t-2 border-t-finance-chart-red">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Overall Risk Score</span>
          <ShieldAlert className="h-5 w-5 text-finance-accent-blue" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative h-40 w-40 drop-shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-finance-chart-red drop-shadow-md">71</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Score', value: 71 },
                    { name: 'Remaining', value: 29 }
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={60}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                >
                  <Cell fill="#ef4444" className="drop-shadow-md" />
                  <Cell fill="#1e293b" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center mt-4 bg-red-900/20 px-4 py-2 rounded-full">
            <TrendingUp className="h-5 w-5 text-finance-chart-red mr-2" />
            <span className="text-finance-chart-red font-medium">+5 points risk increase</span>
          </div>
          <div className="grid grid-cols-3 w-full mt-6 gap-3">
            <div className="flex flex-col items-center p-3 bg-secondary/30 rounded-lg border border-gray-800/30 hover:border-finance-accent-blue/30 transition-all">
              <span className="text-xs text-muted-foreground mb-1">Market</span>
              <span className="font-medium text-finance-chart-red text-lg">76%</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-secondary/30 rounded-lg border border-gray-800/30 hover:border-finance-accent-blue/30 transition-all">
              <span className="text-xs text-muted-foreground mb-1">Operations</span>
              <span className="font-medium text-yellow-500 text-lg">65%</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-secondary/30 rounded-lg border border-gray-800/30 hover:border-finance-accent-blue/30 transition-all">
              <span className="text-xs text-muted-foreground mb-1">Regulatory</span>
              <span className="font-medium text-finance-chart-green text-lg">42%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskScore;

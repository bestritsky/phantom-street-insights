
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
    <Card className="hover-glow col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Overall Risk Score</span>
          <ShieldAlert className="h-5 w-5 text-finance-accent-blue" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative h-36 w-36">
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <p className="text-4xl font-bold text-finance-chart-red">71</p>
                <p className="text-muted-foreground text-center text-sm">Risk Level</p>
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
                  <Cell fill="#ef4444" />
                  <Cell fill="#1e293b" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center mt-4">
            <TrendingUp className="h-5 w-5 text-finance-chart-red mr-2" />
            <span className="text-finance-chart-red font-medium">+5 points risk increase</span>
          </div>
          <div className="grid grid-cols-3 w-full mt-6 gap-2">
            <div className="flex flex-col items-center p-2 bg-secondary/30 rounded-md">
              <span className="text-sm text-muted-foreground">Market</span>
              <span className="font-medium text-finance-chart-red">76%</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-secondary/30 rounded-md">
              <span className="text-sm text-muted-foreground">Operations</span>
              <span className="font-medium text-yellow-500">65%</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-secondary/30 rounded-md">
              <span className="text-sm text-muted-foreground">Regulatory</span>
              <span className="font-medium text-finance-chart-green">42%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskScore;

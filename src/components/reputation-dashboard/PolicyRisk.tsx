
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe } from 'lucide-react';
import { 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

// Mock data for policy risk
const policyRiskData = [
  { name: 'Q1', domestic: 40, international: 24 },
  { name: 'Q2', domestic: 30, international: 13 },
  { name: 'Q3', domestic: 45, international: 28 },
  { name: 'Q4', domestic: 50, international: 38 },
];

const PolicyRisk: React.FC = () => {
  return (
    <Card className="hover-glow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Policy & Regulatory Risk</span>
          <Globe className="h-5 w-5 text-finance-accent-blue" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={policyRiskData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#E5E7EB' }}
              labelStyle={{ color: '#F9FAFB' }}
            />
            <Bar dataKey="domestic" name="Domestic Policy" fill="#3b82f6" />
            <Bar dataKey="international" name="International Policy" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-finance-accent-blue mr-2 rounded-sm"></div>
                <span className="text-sm">Domestic</span>
              </div>
              <Badge className="bg-finance-chart-red">High Risk</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Potential EV subsidy changes in Q4 may impact pricing strategy</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-finance-accent-purple mr-2 rounded-sm"></div>
                <span className="text-sm">International</span>
              </div>
              <Badge className="bg-yellow-600">Medium Risk</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Tariff negotiations ongoing in key Asian manufacturing regions</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicyRisk;

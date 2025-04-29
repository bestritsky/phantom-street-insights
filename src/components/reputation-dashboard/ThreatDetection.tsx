
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart3 } from 'lucide-react';

// Mock data for threat detection
const threatData = [
  { name: 'Tariff Changes', value: 85, color: '#ef4444' },
  { name: 'Supply Chain', value: 65, color: '#f97316' },
  { name: 'Social Media', value: 45, color: '#eab308' },
  { name: 'Competitor PR', value: 35, color: '#22c55e' },
  { name: 'Legal Actions', value: 20, color: '#3b82f6' },
];

const ThreatDetection: React.FC = () => {
  return (
    <Card className="hover-glow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Threat Detection Heatmap</span>
          <BarChart3 className="h-5 w-5 text-finance-accent-blue" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {threatData.map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="font-medium">{item.name}</span>
                </div>
                <span style={{ color: item.color }}>{item.value}%</span>
              </div>
              <Progress 
                value={item.value} 
                className="h-2" 
                style={{ 
                  backgroundColor: "#374151", 
                  "--progress-background": item.color 
                } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h4 className="text-sm font-medium mb-2">AI Risk Assessment</h4>
          <p className="text-sm text-muted-foreground">
            Tariff changes pose the highest risk based on recent policy announcements and market signals. Immediate attention recommended.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatDetection;

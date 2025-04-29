
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

// Mock data for supply chain indicators
const supplyChainData = [
  { name: "Materials", value: 72, fullValue: 100 },
  { name: "Manufacturing", value: 83, fullValue: 100 },
  { name: "Logistics", value: 65, fullValue: 100 },
  { name: "Distribution", value: 91, fullValue: 100 },
];

const SupplyChainRisk: React.FC = () => {
  return (
    <Card className="hover-glow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Supply Chain Risk Indicators</span>
          <ShieldAlert className="h-5 w-5 text-finance-accent-blue" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {supplyChainData.map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-sm">
                  Risk Score: <span className={item.value > 80 ? "text-finance-chart-green" : item.value > 70 ? "text-yellow-500" : "text-finance-chart-red"}>
                    {item.value}
                  </span>
                </span>
              </div>
              <div className="h-2.5 w-full bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.value > 80
                      ? "bg-finance-chart-green"
                      : item.value > 70
                      ? "bg-yellow-500"
                      : "bg-finance-chart-red"
                  }`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-3 border border-yellow-600/30 bg-yellow-900/10 rounded-md">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-500">Supply Chain Alert</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Potential disruption detected in logistics network. Container shipping delays expected from Shanghai port.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplyChainRisk;

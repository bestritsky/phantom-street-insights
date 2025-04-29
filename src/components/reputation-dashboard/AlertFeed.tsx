
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  AlertCircle, 
  AlertTriangle, 
  Eye,
  Bell 
} from 'lucide-react';

// Mock alert data
const alertData = [
  {
    id: 1,
    title: 'Potential tariff increase on semiconductor imports',
    source: 'Policy Alert',
    severity: 'high',
    time: '12 minutes ago'
  },
  {
    id: 2,
    title: 'Negative sentiment spike on Twitter regarding new product launch',
    source: 'Social Monitoring',
    severity: 'medium',
    time: '47 minutes ago'
  },
  {
    id: 3,
    title: 'Supply chain disruption detected in Southeast Asia',
    source: 'Supply Chain Monitor',
    severity: 'high',
    time: '1 hour ago'
  },
  {
    id: 4,
    title: 'Competitor announced similar product launch next quarter',
    source: 'Market Intelligence',
    severity: 'medium',
    time: '3 hours ago'
  },
  {
    id: 5,
    title: 'Positive media coverage from industry publication',
    source: 'Media Monitoring',
    severity: 'low',
    time: '5 hours ago'
  }
];

const AlertFeed: React.FC = () => {
  return (
    <Card className="hover-glow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Real-time Alert Feed</span>
          <Bell className="h-5 w-5 text-finance-accent-blue" />
        </CardTitle>
      </CardHeader>
      <CardContent className="max-h-[300px] overflow-y-auto scrollbar-hide">
        <div className="space-y-4">
          {alertData.map((alert) => (
            <div key={alert.id} className="flex p-3 border-l-2 border-gray-800 hover:bg-gray-800/30 transition-colors rounded-r-md">
              <div className="mr-3">
                {alert.severity === 'high' ? (
                  <AlertCircle className="h-5 w-5 text-finance-chart-red" />
                ) : alert.severity === 'medium' ? (
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Eye className="h-5 w-5 text-finance-chart-green" />
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <Badge
                    className={`mr-2 ${
                      alert.severity === 'high'
                        ? 'bg-finance-chart-red'
                        : alert.severity === 'medium'
                        ? 'bg-yellow-600'
                        : 'bg-finance-chart-green'
                    }`}
                  >
                    {alert.severity}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <h4 className="font-medium text-sm">{alert.title}</h4>
                <div className="flex items-center">
                  <span className="text-xs text-muted-foreground">Source: {alert.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertFeed;

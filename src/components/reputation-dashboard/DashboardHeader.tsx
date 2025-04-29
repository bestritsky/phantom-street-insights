
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, AlertTriangle } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <p className="text-muted-foreground">
          See threats before headlines hit. Updated April 29, 2025
        </p>
      </div>
      <div className="mt-4 md:mt-0 flex items-center">
        <Badge variant="outline" className="text-finance-accent-blue border-finance-accent-blue px-3 py-1 mr-2">
          <AlertCircle className="h-4 w-4 mr-1" />
          2 High Alerts
        </Badge>
        <Badge variant="outline" className="text-yellow-500 border-yellow-500 px-3 py-1">
          <AlertTriangle className="h-4 w-4 mr-1" />
          3 Medium Alerts
        </Badge>
      </div>
    </div>
  );
};

export default DashboardHeader;

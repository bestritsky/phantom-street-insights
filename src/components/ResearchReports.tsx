
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock research reports
const researchReports = [
  {
    id: 1,
    title: 'Tesla Q1 2025 Earnings Analysis',
    type: 'Earnings Report',
    date: 'April 21, 2025',
    insights: 'Tesla exceeded expectations with record vehicle deliveries and improved margin performance.'
  },
  {
    id: 2,
    title: 'EV Industry Market Outlook',
    type: 'Industry Report',
    date: 'April 15, 2025',
    insights: 'Global EV adoption expected to accelerate to 45% of new vehicle sales by 2030.'
  },
  {
    id: 3,
    title: 'FSD Technology Competitive Landscape',
    type: 'Technology Analysis',
    date: 'April 7, 2025',
    insights: 'Tesla maintains lead in autonomous driving technology with over 15 billion miles of real-world data.'
  },
  {
    id: 4,
    title: 'Battery Innovation and Supply Chain',
    type: 'Supply Chain Analysis',
    date: 'March 25, 2025',
    insights: 'New breakthroughs in battery technology could reduce costs by 30% over next 24 months.'
  }
];

const ResearchReports: React.FC = () => {
  return (
    <Card className="hover-glow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Premium Research</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {researchReports.map(report => (
            <div 
              key={report.id}
              className="border border-gray-800 rounded-lg p-4 transition-all hover:border-gray-700 hover:bg-gray-900/30"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-white">{report.title}</h3>
                  <div className="flex items-center mt-1 space-x-3">
                    <span className="text-xs bg-secondary px-2 py-0.5 rounded">
                      {report.type}
                    </span>
                    <span className="text-xs text-gray-400">{report.date}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs">Download PDF</Button>
              </div>
              <p className="mt-3 text-sm text-gray-400">{report.insights}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchReports;

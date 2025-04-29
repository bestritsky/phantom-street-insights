
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { Button } from '@/components/ui/button';
import { ChartContainer } from '@/components/ui/chart';

// Mock data for automation impact
const costSavingsData = [
  {
    name: 'Finance',
    before: 100,
    after: 72,
  },
  {
    name: 'Marketing',
    before: 85,
    after: 60,
  },
  {
    name: 'Support',
    before: 90,
    after: 65,
  }
];

const CostAutomationSection: React.FC = () => {
  return (
    <section className="space-y-8 py-16 bg-[#182234]"> {/* Slightly darker than Why Us section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cut Ops Costs with Smart Automation</h2>
          <div className="w-24 h-1 bg-[#0ea5e9] mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Chart Side */}
          <div className="w-full md:w-1/2">
            <ChartContainer className="p-4 h-[400px]" config={{}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={costSavingsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                  <XAxis dataKey="name" tick={{ fill: '#e5e7eb' }} />
                  <YAxis 
                    tick={{ fill: '#e5e7eb' }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1F2C', 
                      borderColor: '#333',
                      borderRadius: '0.375rem'
                    }}
                    formatter={(value) => [`${value}%`, 'Cost']}
                  />
                  <Bar 
                    name="Before Automation" 
                    dataKey="before" 
                    fill="#94a3b8" // slate-400
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    name="After Automation" 
                    dataKey="after" 
                    fill="rgba(14, 165, 233, 0.7)" // teal-500 at 70% opacity
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          
          {/* Content Side */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-xl text-gray-300 mb-8">
              Replace slow, error-prone manual tasks with AI-driven workflows that unlock double-digit savings in under a year.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-finance-accent-blue">-28%</p>
                <p className="text-sm text-gray-300">average reduction in manual hours within 90 days</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-finance-accent-blue">+18%</p>
                <p className="text-sm text-gray-300">process throughput without adding headcount</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-finance-accent-blue">6 mo.</p>
                <p className="text-sm text-gray-300">median ROI payback on automation investments</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Where the Savings Come From</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-finance-accent-blue mr-2">•</span> 
                  AI invoice-matching shaves 3 minutes off every payable.
                </li>
                <li className="flex items-start">
                  <span className="text-finance-accent-blue mr-2">•</span> 
                  Automated lead-scoring focuses reps on the 20% that close.
                </li>
                <li className="flex items-start">
                  <span className="text-finance-accent-blue mr-2">•</span> 
                  NLP ticket triage drops first-response time below 5 minutes.
                </li>
                <li className="flex items-start">
                  <span className="text-finance-accent-blue mr-2">•</span> 
                  Low-code RPA bots keep legacy systems in sync—no rebuild required.
                </li>
              </ul>
            </div>
            
            <p className="text-gray-400 italic mb-4">
              Ask for a complimentary automation audit and discover where you can recapture hidden dollars.
            </p>
            
            <Button className="bg-transparent border border-[#0ea5e9] hover:bg-[#0ea5e9]/10 text-[#0ea5e9]">
              Request Automation Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostAutomationSection;

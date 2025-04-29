
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertTriangle, DollarSign } from 'lucide-react';

// Mock data for cost factors
const costFactorsData = [
  { name: 'Tariffs', previous: 12, current: 18 },
  { name: 'Raw Materials', previous: 25, current: 31 },
  { name: 'Labor', previous: 18, current: 20 },
  { name: 'Shipping', previous: 15, current: 22 },
  { name: 'Energy', previous: 10, current: 13 },
  { name: 'Storage', previous: 8, current: 7 },
];

// Mock data for cost impact by product category
const categoryImpactData = [
  { category: 'Electronics', impact: 16.7, products: 12, averageDelay: 5 },
  { category: 'Industrial', impact: 12.4, products: 8, averageDelay: 7 },
  { category: 'Office', impact: -3.1, products: 6, averageDelay: -1 },
  { category: 'Medical', impact: 8.9, products: 9, averageDelay: 2 },
  { category: 'Automotive', impact: 14.2, products: 7, averageDelay: 6 },
];

const CostAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-finance-accent-blue" />
              <span>Cost Increase Factors</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer 
                config={{
                  previous: { label: "Previous Quarter" },
                  current: { label: "Current Quarter" },
                }} 
                className="h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={costFactorsData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" unit="%" />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                    />
                    <Legend />
                    <Bar
                      dataKey="previous"
                      name="Previous Quarter"
                      fill="#1EAEDB"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="current"
                      name="Current Quarter"
                      fill="#F97316"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="mt-4 p-3 border border-yellow-600/30 bg-yellow-900/10 rounded-md">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-500">Cost Alert</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Shipping costs have increased by 46.7% compared to previous quarter due to 
                    new tariffs and fuel surcharges.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Cost Impact by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Category</TableHead>
                  <TableHead>Cost Impact</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Avg. Delay</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categoryImpactData.map((category) => (
                  <TableRow key={category.category}>
                    <TableCell className="font-medium">{category.category}</TableCell>
                    <TableCell>
                      <span 
                        className={
                          category.impact > 0 
                            ? 'text-finance-chart-red' 
                            : 'text-finance-chart-green'
                        }
                      >
                        {category.impact > 0 ? '+' : ''}{category.impact}%
                      </span>
                    </TableCell>
                    <TableCell>{category.products}</TableCell>
                    <TableCell>
                      <span
                        className={
                          category.averageDelay > 0 
                            ? 'text-finance-chart-red' 
                            : category.averageDelay < 0 
                              ? 'text-finance-chart-green' 
                              : ''
                        }
                      >
                        {category.averageDelay > 0 ? '+' : ''}{category.averageDelay} days
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-2">Cost Impact Summary</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-3 h-3 rounded-full bg-finance-chart-red mt-1 mr-2"></span>
                  <span>Electronics and Industrial categories show highest cost increases due to semiconductor tariffs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 rounded-full bg-yellow-500 mt-1 mr-2"></span>
                  <span>Medical products seeing moderate cost increases from shipping delays</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 rounded-full bg-finance-chart-green mt-1 mr-2"></span>
                  <span>Office equipment costs have decreased due to supplier competition</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CostAnalysis;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { AlertTriangle, Clock, Package, Truck } from 'lucide-react';

// Mock data for delay trends
const delayTrendData = [
  { month: 'Jan', shipping: 3, customs: 2, production: 1 },
  { month: 'Feb', shipping: 4, customs: 2, production: 2 },
  { month: 'Mar', shipping: 5, customs: 3, production: 2 },
  { month: 'Apr', shipping: 4, customs: 4, production: 3 },
  { month: 'May', shipping: 6, customs: 4, production: 3 },
  { month: 'Jun', shipping: 8, customs: 5, production: 3 },
  { month: 'Jul', shipping: 10, customs: 6, production: 4 },
  { month: 'Aug', shipping: 9, customs: 5, production: 4 },
];

// Mock data for current disruptions
const disruptionData = [
  { 
    id: 1,
    name: "Port Congestion - Shanghai", 
    type: "Shipping",
    impact: "High",
    products: 12,
    delay: 14,
    description: "Significant delays at Shanghai port affecting container shipping times"
  },
  { 
    id: 2,
    name: "Customs Processing - EU", 
    type: "Customs",
    impact: "Medium",
    products: 8,
    delay: 5,
    description: "New customs documentation requirements causing processing delays"
  },
  { 
    id: 3,
    name: "Component Shortage", 
    type: "Production",
    impact: "High",
    products: 15,
    delay: 10,
    description: "Semiconductor shortage impacting production schedules"
  },
  { 
    id: 4,
    name: "Rail Transport - North America", 
    type: "Shipping",
    impact: "Low",
    products: 6,
    delay: 3,
    description: "Intermittent delays in rail transport affecting distribution"
  },
];

const SupplyChainMonitor: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg font-medium">
              <Truck className="mr-2 h-5 w-5 text-finance-accent-blue" />
              <span>Shipping Delays</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-finance-chart-red">+7.2 days</div>
            <Progress
              value={70}
              className="h-2 mt-2"
              style={{ "--progress-background": "#EF4444" } as React.CSSProperties}
            />
            <p className="text-xs text-muted-foreground mt-1">70% increase since last quarter</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg font-medium">
              <Clock className="mr-2 h-5 w-5 text-yellow-500" />
              <span>Customs Processing</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-500">+4.5 days</div>
            <Progress
              value={45}
              className="h-2 mt-2"
              style={{ "--progress-background": "#EAB308" } as React.CSSProperties}
            />
            <p className="text-xs text-muted-foreground mt-1">45% increase since last quarter</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg font-medium">
              <Package className="mr-2 h-5 w-5 text-blue-500" />
              <span>Production Delays</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-500">+3.1 days</div>
            <Progress
              value={30}
              className="h-2 mt-2"
              style={{ "--progress-background": "#3B82F6" } as React.CSSProperties}
            />
            <p className="text-xs text-muted-foreground mt-1">30% increase since last quarter</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Supply Chain Delay Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ChartContainer
              config={{
                shipping: { label: "Shipping Delays" },
                customs: { label: "Customs Processing" },
                production: { label: "Production Delays" },
              }}
              className="h-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={delayTrendData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorShipping" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorCustoms" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EAB308" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#EAB308" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" unit=" days" />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="shipping"
                    name="Shipping Delays"
                    stroke="#EF4444"
                    fillOpacity={1}
                    fill="url(#colorShipping)"
                  />
                  <Area
                    type="monotone"
                    dataKey="customs"
                    name="Customs Processing"
                    stroke="#EAB308"
                    fillOpacity={1}
                    fill="url(#colorCustoms)"
                  />
                  <Area
                    type="monotone"
                    dataKey="production"
                    name="Production Delays"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorProduction)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
            <span>Active Supply Chain Disruptions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="customs">Customs</TabsTrigger>
              <TabsTrigger value="production">Production</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0 space-y-4">
              {disruptionData.map((disruption) => (
                <Card key={disruption.id} className="bg-gray-900/50">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="font-medium text-base">{disruption.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{disruption.description}</p>
                      </div>
                      <div className="flex mt-2 md:mt-0 space-x-4">
                        <div className="text-center">
                          <span className="text-xs text-muted-foreground">Type</span>
                          <p className="text-sm font-medium">{disruption.type}</p>
                        </div>
                        <div className="text-center">
                          <span className="text-xs text-muted-foreground">Impact</span>
                          <p className={`text-sm font-medium ${
                            disruption.impact === 'High' 
                              ? 'text-finance-chart-red' 
                              : disruption.impact === 'Medium'
                                ? 'text-yellow-500' 
                                : 'text-blue-500'
                          }`}>
                            {disruption.impact}
                          </p>
                        </div>
                        <div className="text-center">
                          <span className="text-xs text-muted-foreground">Products</span>
                          <p className="text-sm font-medium">{disruption.products}</p>
                        </div>
                        <div className="text-center">
                          <span className="text-xs text-muted-foreground">Delay</span>
                          <p className="text-sm font-medium text-finance-chart-red">+{disruption.delay} days</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="shipping" className="mt-0 space-y-4">
              {disruptionData
                .filter(d => d.type === "Shipping")
                .map((disruption) => (
                  <Card key={disruption.id} className="bg-gray-900/50">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="font-medium text-base">{disruption.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{disruption.description}</p>
                        </div>
                        <div className="flex mt-2 md:mt-0 space-x-4">
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Type</span>
                            <p className="text-sm font-medium">{disruption.type}</p>
                          </div>
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Impact</span>
                            <p className={`text-sm font-medium ${
                              disruption.impact === 'High' 
                                ? 'text-finance-chart-red' 
                                : disruption.impact === 'Medium'
                                  ? 'text-yellow-500' 
                                  : 'text-blue-500'
                            }`}>
                              {disruption.impact}
                            </p>
                          </div>
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Products</span>
                            <p className="text-sm font-medium">{disruption.products}</p>
                          </div>
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Delay</span>
                            <p className="text-sm font-medium text-finance-chart-red">+{disruption.delay} days</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            <TabsContent value="customs" className="mt-0 space-y-4">
              {disruptionData
                .filter(d => d.type === "Customs")
                .map((disruption) => (
                  <Card key={disruption.id} className="bg-gray-900/50">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="font-medium text-base">{disruption.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{disruption.description}</p>
                        </div>
                        <div className="flex mt-2 md:mt-0 space-x-4">
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Type</span>
                            <p className="text-sm font-medium">{disruption.type}</p>
                          </div>
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Impact</span>
                            <p className={`text-sm font-medium ${
                              disruption.impact === 'High' 
                                ? 'text-finance-chart-red' 
                                : disruption.impact === 'Medium'
                                  ? 'text-yellow-500' 
                                  : 'text-blue-500'
                            }`}>
                              {disruption.impact}
                            </p>
                          </div>
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Products</span>
                            <p className="text-sm font-medium">{disruption.products}</p>
                          </div>
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Delay</span>
                            <p className="text-sm font-medium text-finance-chart-red">+{disruption.delay} days</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            <TabsContent value="production" className="mt-0 space-y-4">
              {disruptionData
                .filter(d => d.type === "Production")
                .map((disruption) => (
                  <Card key={disruption.id} className="bg-gray-900/50">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="font-medium text-base">{disruption.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{disruption.description}</p>
                        </div>
                        <div className="flex mt-2 md:mt-0 space-x-4">
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Type</span>
                            <p className="text-sm font-medium">{disruption.type}</p>
                          </div>
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Impact</span>
                            <p className={`text-sm font-medium ${
                              disruption.impact === 'High' 
                                ? 'text-finance-chart-red' 
                                : disruption.impact === 'Medium'
                                  ? 'text-yellow-500' 
                                  : 'text-blue-500'
                            }`}>
                              {disruption.impact}
                            </p>
                          </div>
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Products</span>
                            <p className="text-sm font-medium">{disruption.products}</p>
                          </div>
                          <div className="text-center">
                            <span className="text-xs text-muted-foreground">Delay</span>
                            <p className="text-sm font-medium text-finance-chart-red">+{disruption.delay} days</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplyChainMonitor;

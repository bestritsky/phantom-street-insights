
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { 
  AlertCircle, 
  AlertTriangle, 
  TrendingDown, 
  TrendingUp, 
  Bell, 
  Eye,
  Flag,
  ShieldAlert,
  Globe,
  MessageSquare,
  Users,
  Building,
  Newspaper,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  BarChart3
} from 'lucide-react';

// Mock data for sentiment analysis
const sentimentData = [
  { name: 'Apr 22', score: 78 },
  { name: 'Apr 23', score: 82 },
  { name: 'Apr 24', score: 75 },
  { name: 'Apr 25', score: 68 },
  { name: 'Apr 26', score: 62 },
  { name: 'Apr 27', score: 59 },
  { name: 'Apr 28', score: 65 },
  { name: 'Apr 29', score: 71 },
];

// Mock data for threat detection
const threatData = [
  { name: 'Tariff Changes', value: 85, color: '#ef4444' },
  { name: 'Supply Chain', value: 65, color: '#f97316' },
  { name: 'Social Media', value: 45, color: '#eab308' },
  { name: 'Competitor PR', value: 35, color: '#22c55e' },
  { name: 'Legal Actions', value: 20, color: '#3b82f6' },
];

// Mock data for policy risk
const policyRiskData = [
  { name: 'Q1', domestic: 40, international: 24 },
  { name: 'Q2', domestic: 30, international: 13 },
  { name: 'Q3', domestic: 45, international: 28 },
  { name: 'Q4', domestic: 50, international: 38 },
];

// Mock data for supply chain indicators
const supplyChainData = [
  { name: "Materials", value: 72, fullValue: 100 },
  { name: "Manufacturing", value: 83, fullValue: 100 },
  { name: "Logistics", value: 65, fullValue: 100 },
  { name: "Distribution", value: 91, fullValue: 100 },
];

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

const ReputationDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Strategic Reputation & Risk Dashboard</h2>
          <p className="text-muted-foreground mt-1">
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
      
      {/* Risk Score Overview (previously Reputation Score) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        
        <Card className="hover-glow col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Sentiment Analysis Trend</span>
              <LineChartIcon className="h-5 w-5 text-finance-accent-blue" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={sentimentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#E5E7EB' }}
                  labelStyle={{ color: '#F9FAFB' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  activeDot={{ r: 8 }} 
                />
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Media Sentiment</span>
                <div className="flex items-center">
                  <span className="text-lg font-medium">Positive</span>
                  <TrendingUp className="h-4 w-4 text-finance-chart-green ml-2" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Social Media</span>
                <div className="flex items-center">
                  <span className="text-lg font-medium">Neutral</span>
                  <TrendingDown className="h-4 w-4 text-finance-chart-red ml-2" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Investor Sentiment</span>
                <div className="flex items-center">
                  <span className="text-lg font-medium">Positive</span>
                  <TrendingUp className="h-4 w-4 text-finance-chart-green ml-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Threat Detection and Policy Risk */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
      
      {/* Supply Chain Risk & Real-time Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
};

export default ReputationDashboard;

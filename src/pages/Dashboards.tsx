
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, ShieldAlert, Package } from 'lucide-react';

// Import the image directly
import riskDashboardImage from '../images/risk-dashboard.png';

const Dashboards = () => {
  const navigate = useNavigate();
  
  const dashboards = [
    {
      id: 'market',
      title: 'Market Dashboard',
      description: 'Market trends, stock movements, and competitor analysis',
      icon: <BarChart3 className="h-8 w-8 text-finance-accent-blue" />,
      color: 'from-finance-accent-blue/20 to-transparent',
      onClick: () => navigate('/dashboards/market'),
      thumbnail: null
    },
    {
      id: 'risks',
      title: 'Risks Dashboard',
      description: 'Risk scores, sentiment analysis, and threat detection',
      icon: <ShieldAlert className="h-8 w-8 text-finance-accent-purple" />,
      color: 'from-finance-accent-purple/20 to-transparent',
      onClick: () => navigate('/dashboards/risks'),
      thumbnail: riskDashboardImage
    },
    {
      id: 'products',
      title: 'Products Dashboard',
      description: 'Product performance, cost analysis, and supply chain monitoring',
      icon: <Package className="h-8 w-8 text-finance-accent-orange" />,
      color: 'from-finance-accent-orange/20 to-transparent',
      onClick: () => navigate('/products'),
      thumbnail: null
    }
  ];

  return (
    <div className="min-h-screen bg-finance-dark-blue flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-10 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Dashboards</h1>
        <p className="text-finance-muted-text mb-8 max-w-2xl">
          Select a dashboard to view detailed analytics and insights tailored to your business needs.
          Each dashboard provides specialized data visualization and monitoring tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dashboard) => (
            <Card 
              key={dashboard.id}
              className="hover-glow overflow-hidden transition-all duration-300 hover:translate-y-[-5px] bg-card/80 backdrop-blur-sm"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${dashboard.color}`}></div>
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{dashboard.title}</h2>
                  <p className="text-sm text-muted-foreground">{dashboard.description}</p>
                </div>
                {dashboard.icon}
              </div>
              
              {dashboard.thumbnail && (
                <div className="px-6 pb-4">
                  <div className="rounded-md overflow-hidden border border-gray-800">
                    <img 
                      src={dashboard.thumbnail} 
                      alt={`${dashboard.title} Preview`}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: "180px" }}
                    />
                  </div>
                </div>
              )}
              
              {!dashboard.thumbnail && (
                <div className="px-6 pb-4">
                  <div className="rounded-md overflow-hidden border border-gray-800 bg-gray-900/50 flex items-center justify-center" style={{ height: "120px" }}>
                    <p className="text-sm text-gray-500">Dashboard preview</p>
                  </div>
                </div>
              )}
              
              <CardFooter className="border-t border-border/40 p-4">
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-finance-dark-gray/50"
                  onClick={dashboard.onClick}
                >
                  View Dashboard
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <footer className="py-6 px-4 border-t border-gray-800 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              <p>© 2025 BinaryAdvisers. Premium financial data and research.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-finance-accent-blue transition-colors">Terms</a>
              <a href="#" className="hover:text-finance-accent-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-finance-accent-blue transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboards;

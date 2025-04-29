
import React from 'react';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarketDashboard from '@/components/MarketDashboard';
import ReputationDashboard from '@/components/ReputationDashboard';

const Dashboards = () => {
  return (
    <div className="min-h-screen bg-finance-dark-blue flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <h1 className="text-2xl font-bold mb-6">Dashboards</h1>
        
        <Tabs defaultValue="market" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6 max-w-md">
            <TabsTrigger value="market">Market Dashboard</TabsTrigger>
            <TabsTrigger value="reputation">Risk & Reputation</TabsTrigger>
          </TabsList>
          <TabsContent value="market" className="mt-0">
            <MarketDashboard />
          </TabsContent>
          <TabsContent value="reputation" className="mt-0">
            <ReputationDashboard />
          </TabsContent>
        </Tabs>
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

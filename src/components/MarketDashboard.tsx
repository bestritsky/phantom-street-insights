
import React from 'react';
import Header from '@/components/Header';
import StockChart from './StockChart';
import MarketOverview from './MarketOverview';
import CompetitorAnalysis from './CompetitorAnalysis';
import ResearchReports from './ResearchReports';
import MarketNews from './MarketNews';

const MarketDashboardContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="market-ticker animate-pulse-subtle">
          <div className="ticker-move space-x-6">
            <div className="ticker-item">
              <span className="font-semibold">S&P 500</span>
              <span className="ticker-value-up ml-1">4,783.45 +0.32%</span>
            </div>
            <div className="ticker-item">
              <span className="font-semibold">NASDAQ</span>
              <span className="ticker-value-down ml-1">15,927.90 -0.18%</span>
            </div>
            <div className="ticker-item">
              <span className="font-semibold">DOW</span>
              <span className="ticker-value-up ml-1">38,239.98 +0.23%</span>
            </div>
            <div className="ticker-item">
              <span className="font-semibold">TSLA</span>
              <span className="ticker-value-up ml-1">182.45 +2.17%</span>
            </div>
            <div className="ticker-item">
              <span className="font-semibold">AAPL</span>
              <span className="ticker-value-up ml-1">173.23 +0.85%</span>
            </div>
            <div className="ticker-item">
              <span className="font-semibold">MSFT</span>
              <span className="ticker-value-down ml-1">402.78 -0.32%</span>
            </div>
            <div className="ticker-item">
              <span className="font-semibold">GOOGL</span>
              <span className="ticker-value-up ml-1">154.92 +1.23%</span>
            </div>
            <div className="ticker-item">
              <span className="font-semibold">BTC-USD</span>
              <span className="ticker-value-up ml-1">62,458.30 +2.54%</span>
            </div>
            <div className="ticker-item">
              <span className="font-semibold">OIL</span>
              <span className="ticker-value-down ml-1">78.32 -0.67%</span>
            </div>
          </div>
        </div>
      </div>

      <MarketOverview />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <StockChart />
        </div>
        <div>
          <MarketNews />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div>
          <CompetitorAnalysis />
        </div>
        <div>
          <ResearchReports />
        </div>
      </div>
    </div>
  );
};

const MarketDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-finance-dark-blue flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <h1 className="text-2xl font-bold mb-6">Market Dashboard</h1>
        <MarketDashboardContent />
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

export default MarketDashboard;

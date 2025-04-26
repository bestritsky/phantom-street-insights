
import React from 'react';
import StockChart from './StockChart';
import MarketOverview from './MarketOverview';
import CompetitorAnalysis from './CompetitorAnalysis';
import ResearchReports from './ResearchReports';
import MarketNews from './MarketNews';

const Dashboard: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-6 space-y-8">
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
    </main>
  );
};

export default Dashboard;

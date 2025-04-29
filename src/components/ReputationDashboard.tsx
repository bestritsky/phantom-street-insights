
import React from 'react';
import Header from '@/components/Header';
import DashboardHeader from './reputation-dashboard/DashboardHeader';
import RiskScore from './reputation-dashboard/RiskScore';
import SentimentAnalysis from './reputation-dashboard/SentimentAnalysis';
import ThreatDetection from './reputation-dashboard/ThreatDetection';
import PolicyRisk from './reputation-dashboard/PolicyRisk';
import SupplyChainRisk from './reputation-dashboard/SupplyChainRisk';
import AlertFeed from './reputation-dashboard/AlertFeed';

const ReputationDashboardContent: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <DashboardHeader />
      
      {/* Risk Score and Sentiment Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <RiskScore />
        <SentimentAnalysis />
      </div>
      
      {/* Threat Detection and Policy Risk */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ThreatDetection />
        <PolicyRisk />
      </div>
      
      {/* Supply Chain Risk & Real-time Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SupplyChainRisk />
        <AlertFeed />
      </div>
    </div>
  );
};

const ReputationDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-finance-dark-blue flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <h1 className="text-2xl font-bold mb-6">Risk & Reputation Dashboard</h1>
        <ReputationDashboardContent />
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

export default ReputationDashboard;

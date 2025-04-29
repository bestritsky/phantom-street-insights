
import React from 'react';
import DashboardHeader from './reputation-dashboard/DashboardHeader';
import RiskScore from './reputation-dashboard/RiskScore';
import SentimentAnalysis from './reputation-dashboard/SentimentAnalysis';
import ThreatDetection from './reputation-dashboard/ThreatDetection';
import PolicyRisk from './reputation-dashboard/PolicyRisk';
import SupplyChainRisk from './reputation-dashboard/SupplyChainRisk';
import AlertFeed from './reputation-dashboard/AlertFeed';

const ReputationDashboard: React.FC = () => {
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

export default ReputationDashboard;

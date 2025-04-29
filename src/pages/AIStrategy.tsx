
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/ai-strategy/HeroSection';
import ServicesSection from '@/components/ai-strategy/ServicesSection';
import ExecutiveEnablementSection from '@/components/ai-strategy/ExecutiveEnablementSection';
import PortfolioPositioningSection from '@/components/ai-strategy/PortfolioPositioningSection';
import CostAutomationSection from '@/components/ai-strategy/CostAutomationSection';
import EngagementSection from '@/components/ai-strategy/EngagementSection';
import Footer from '@/components/ai-strategy/Footer';

const AIStrategy: React.FC = () => {
  return (
    <div className="min-h-screen bg-finance-dark-blue flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <ServicesSection />
        <ExecutiveEnablementSection />
        <PortfolioPositioningSection />
        <CostAutomationSection />
        <EngagementSection />
      </main>
      <Footer />
    </div>
  );
};

export default AIStrategy;

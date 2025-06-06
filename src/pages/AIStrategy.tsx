
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/ai-strategy/HeroSection';
import ExpandableBusinessResults from '@/components/ai-strategy/ExpandableBusinessResults';
import Footer from '@/components/ai-strategy/Footer';

const AIStrategy: React.FC = () => {
  return (
    <div className="min-h-screen bg-finance-dark-blue flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <HeroSection />
        <ExpandableBusinessResults />
      </main>
      <Footer />
    </div>
  );
};

export default AIStrategy;

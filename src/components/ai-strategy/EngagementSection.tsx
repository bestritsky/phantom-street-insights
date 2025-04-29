
import React from 'react';
import { Button } from '@/components/ui/button';

const EngagementSection: React.FC = () => {
  return (
    <section className="bg-[#0f172a] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to tighten your strategy?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Book a complimentary 30-minute session and walk away with at least one immediately actionable insight—no obligation, no slide decks required.
        </p>
        <Button className="bg-[#0ea5e9] hover:bg-[#0ea5e9]/80 text-white font-semibold py-6 px-8 text-lg">
          Schedule My Free Call
        </Button>
      </div>
    </section>
  );
};

export default EngagementSection;

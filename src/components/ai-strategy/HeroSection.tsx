
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative chart-container overflow-hidden p-8 md:p-12 mb-8 bg-[#0f172a] h-[65vh] flex items-center">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url(https://binaryadvisers.com/wp-content/uploads/2025/04/Professional_Mode_Create_a_dynamic_20_second_motio-ezgif.com-optimize.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)',
          mixBlendMode: 'normal',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
          Sharper Decisions, Faster.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Seasoned strategy wisdom, super-charged by AI, so every plan you make stands up to real-world pressure.
        </p>
        <Button className="bg-[#0ea5e9] hover:bg-[#0ea5e9]/80 text-white font-semibold py-6 px-8 text-lg">
          Book Your Free Strategy Call
        </Button>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          98% of clients implement at least one high-ROI change within 30 days.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

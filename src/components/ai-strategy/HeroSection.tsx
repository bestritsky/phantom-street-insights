
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative chart-container overflow-hidden p-8 md:p-12 mb-8">
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
          Critical‑Thinking AI Strategy for an Uncertain World
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Transform tariff turmoil, supply‑chain fractures, and geopolitical shifts into growth 
          with pragmatic AI playbooks grounded in rigorous thinking.
        </p>
        <Button className="bg-finance-accent-blue hover:bg-finance-accent-blue/80 text-white font-semibold py-6 px-8 text-lg">
          Book a Risk & Resilience Call
        </Button>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          From C‑suite workshops to real‑time trade‑flow dashboards, we fuse AI with disciplined 
          critical‑thinking frameworks—so you stay ahead when borders close, costs spike, or partners pivot.
        </p>
        
        <div className="mt-12 p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
          <blockquote className="italic text-xl">
            "AI will not take over your job. People who use critical thinking will."
            <footer className="mt-2 text-finance-accent-blue">— Henry Bestritsky</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

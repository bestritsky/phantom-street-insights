
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from './SectionHeader';
import ServicesGrid from './ServicesGrid';

const ServicesSection: React.FC = () => {
  return (
    <section className="space-y-8 py-16">
      <SectionHeader title="What We Do" />
      
      <ServicesGrid />
      
      <div className="text-center mt-12">
        <Button variant="outline" className="border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9]/10 hover:text-white">
          View All Services
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;

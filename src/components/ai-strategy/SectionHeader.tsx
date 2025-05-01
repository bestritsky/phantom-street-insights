
import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <div className="w-24 h-1 bg-[#0ea5e9] mx-auto"></div>
    </div>
  );
};

export default SectionHeader;

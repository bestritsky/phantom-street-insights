
import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from './servicesData';

const ServicesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service, index) => (
        <ServiceCard 
          key={index}
          title={service.title}
          tagline={service.tagline}
          description={service.description}
          icon={service.icon}
          iconColor={service.iconColor}
          borderColor={service.borderColor}
          deliverables={service.deliverables}
          bulletColor={service.bulletColor}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;

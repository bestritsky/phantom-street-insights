
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  borderColor: string;
  deliverables: string[];
  bulletColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  tagline,
  description,
  icon: Icon,
  iconColor,
  borderColor,
  deliverables,
  bulletColor
}) => {
  return (
    <div className="chart-container hover-glow p-6 relative overflow-hidden group">
      <div className={`absolute top-0 left-0 w-1 h-full ${borderColor}`}></div>
      <Icon className={`${iconColor} mb-4 h-10 w-10`} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`${iconColor} font-semibold mb-3`}>{tagline}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="mt-4 space-y-2">
        <h4 className="font-semibold text-white">Signature Deliverables:</h4>
        <ul className="space-y-2 text-gray-300">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className={`${bulletColor} mr-2`}>•</span> 
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;

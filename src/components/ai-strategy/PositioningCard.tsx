
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PositioningCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
}

const PositioningCard: React.FC<PositioningCardProps> = ({
  icon: Icon,
  iconColor,
  title,
  description
}) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
      <Icon className={`${iconColor} mb-3 h-7 w-7`} />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default PositioningCard;

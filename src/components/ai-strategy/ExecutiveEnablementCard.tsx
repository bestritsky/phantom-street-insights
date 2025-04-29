
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExecutiveEnablementCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  tagline: string;
  description: string;
}

const ExecutiveEnablementCard: React.FC<ExecutiveEnablementCardProps> = ({
  icon: Icon,
  iconColor,
  title,
  tagline,
  description
}) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover-glow">
      <Icon className={`${iconColor} mb-4 h-8 w-8`} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`${iconColor} font-semibold mb-3`}>{tagline}</p>
      <p className="text-gray-300 mb-4">{description}</p>
    </div>
  );
};

export default ExecutiveEnablementCard;

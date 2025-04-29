
import React from 'react';
import PositioningCard from './PositioningCard';
import { 
  Star, 
  Shield, 
  Globe, 
  Network, 
  UserCog, 
  Presentation 
} from 'lucide-react';

const PortfolioPositioningSection: React.FC = () => {
  const positioningPoints = [
    {
      title: "Critical‑Thinking First",
      description: "We strip away jargon and anchor every recommendation to tangible business outcomes.",
      icon: Star,
      iconColor: "text-finance-accent-blue"
    },
    {
      title: "Red‑Team Honesty",
      description: "Each deliverable includes a "What Could Go Wrong?" section with mitigation tactics—your built‑in devil's advocate.",
      icon: Shield,
      iconColor: "text-finance-accent-purple"
    },
    {
      title: "Geopolitical Agility",
      description: "Our models ingest live trade and policy data, keeping your strategy aligned with shifting tariffs, sanctions, and alliances.",
      icon: Globe,
      iconColor: "text-finance-chart-green"
    },
    {
      title: "Lean, Automated Delivery",
      description: "Heavy use of GenAI & low‑code yields Gartner, Forrester & KPMG‑caliber insight at SMB pricing.",
      icon: Network,
      iconColor: "text-finance-accent-orange"
    },
    {
      title: "Community Roots",
      description: "Born in New Milford's Rotary, we pilot civic projects first, proving value before scaling to private‑sector clients.",
      icon: UserCog,
      iconColor: "text-finance-accent-blue"
    },
    {
      title: "Modular Engagements",
      description: "Fixed‑scope sprints (2‑4 weeks) flow into a flexible AI Steering‑Committee Retainer for ongoing guidance.",
      icon: Presentation,
      iconColor: "text-finance-accent-purple"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Positioning the Portfolio</h2>
        <div className="w-24 h-1 bg-finance-chart-green mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {positioningPoints.map((point, index) => (
          <PositioningCard
            key={index}
            title={point.title}
            description={point.description}
            icon={point.icon}
            iconColor={point.iconColor}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioPositioningSection;

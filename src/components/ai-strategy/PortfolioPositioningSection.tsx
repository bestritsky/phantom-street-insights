
import React from 'react';
import { 
  Award, 
  Brain, 
  AlertTriangle, 
  Globe
} from 'lucide-react';

const PortfolioPositioningSection: React.FC = () => {
  const uniqueEdges = [
    {
      title: "Experience That's Battle-Hardened",
      description: "We've steered start-ups and $3B enterprises through recessions, mergers, and tech upheavals. That scar tissue informs every recommendation.",
      icon: Award,
      iconColor: "text-finance-accent-blue"
    },
    {
      title: "AI That Adds X-Ray Vision",
      description: "Custom GPT pipelines scan filings, patents, and market chatter in minutes. You see blind-spots a human researcher might miss for weeks.",
      icon: Brain,
      iconColor: "text-finance-accent-purple"
    },
    {
      title: "Brutally Honest Deliverables",
      description: "Every report contains a 'What Could Go Wrong' page—your built-in devil's advocate—so you can fix flaws before competitors exploit them.",
      icon: AlertTriangle,
      iconColor: "text-finance-chart-green"
    },
    {
      title: "Community-Rooted, Lean Pricing",
      description: "Born in New Milford's Rotary, we pilot civic projects first, proving value before scaling to private-sector clients at sub-Gartner rates.",
      icon: Globe,
      iconColor: "text-finance-accent-orange"
    }
  ];

  return (
    <section className="space-y-8 py-16 bg-[#1e293b]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Us</h2>
          <div className="w-24 h-1 bg-[#0ea5e9] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uniqueEdges.map((edge, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1">
                <edge.icon className={`h-8 w-8 ${edge.iconColor}`} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{edge.title}</h3>
                <p className="text-gray-300">{edge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPositioningSection;

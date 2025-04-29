
import React from 'react';
import { Button } from '@/components/ui/button';
import ServiceCard from './ServiceCard';
import { 
  Brain, 
  BarChart3, 
  LineChart,
  Globe, 
  PieChart
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "AI Leadership & Change‑Management Advisory",
      tagline: "Lead the AI Revolution—No Tech Degree Required.",
      description: "Equip non-technical C‑suite and senior leaders with the mindset, playbooks, and coaching to inspire confident AI adoption across the organization.",
      icon: Brain,
      iconColor: "text-finance-accent-blue",
      borderColor: "bg-finance-accent-blue",
      bulletColor: "text-finance-accent-blue",
      deliverables: [
        "Executive workshops that translate AI into board‑level outcomes",
        "Psychological‑safety frameworks so teams feel free to experiment",
        "1:1 leadership coaching focused on critical‑thinking & decision cadence"
      ]
    },
    {
      title: "End‑to‑End AI Transformation Roadmaps",
      tagline: "From Idea to Impact in 90 Days.",
      description: "We map vision to validated use‑cases, quantify ROI, and stand up a governance model that keeps every initiative on time and on budget—even when global conditions shift overnight.",
      icon: BarChart3,
      iconColor: "text-finance-accent-purple",
      borderColor: "bg-finance-accent-purple",
      bulletColor: "text-finance-accent-purple",
      deliverables: [
        "Use‑case portfolio & capability gap analysis",
        "Governance & KPI dashboard build‑out",
        "90‑day implementation sprint plan"
      ]
    },
    {
      title: "AI‑Driven Market & Competitive Insight",
      tagline: "Spot Risks & Opportunities Before Rivals Do.",
      description: "We distill oceans of market noise into decisive actions—revealing pricing shifts, patent conflicts, and emerging threats—so you can act first and grow faster.",
      icon: LineChart,
      iconColor: "text-finance-accent-orange",
      borderColor: "bg-finance-accent-orange",
      bulletColor: "text-finance-accent-orange",
      deliverables: [
        "Competitor deep‑dives & opportunity sizing",
        "Real‑time news/patent/tariff alerting & dashboards",
        "Decision‑ready briefing decks"
      ]
    },
    {
      title: "Geopolitical & Supply‑Chain Risk Analytics",
      tagline: "Navigate Tariffs, Decoupling & Disruption—Today.",
      description: "Scenario models fuse AI forecasting with live trade‑flow intelligence so you can dodge tariff shocks, ally decoupling, and sudden supply‑chain fractures—before they hit.",
      icon: Globe,
      iconColor: "text-finance-chart-green",
      borderColor: "bg-finance-chart-green",
      bulletColor: "text-finance-chart-green",
      deliverables: [
        "Forward‑earnings stress tests",
        "Tariff & trade‑war impact simulators",
        "Geopolitical trigger‑metric dashboards"
      ]
    },
    {
      title: "Operational Cost‑Takeout & CapEx Optimization",
      tagline: "Unlock 25–40% Savings with Smart Automation.",
      description: "Identify the high‑impact process bottlenecks, then deploy low‑code & GenAI automations to slash cycle times and CapEx.",
      icon: PieChart,
      iconColor: "text-finance-accent-blue",
      borderColor: "bg-finance-accent-blue",
      bulletColor: "text-finance-accent-blue",
      deliverables: [
        "Bottom‑up cost curves & savings roadmap",
        "Automation blueprints (Airtable ↔ Make.com, RPA, LLM agents)",
        "Before‑and‑after ROI trackers"
      ]
    },
    {
      title: "Brand Positioning, Thought‑Leadership & Copy",
      tagline: "Tell Stories that Make AI Human.",
      description: "Craft messaging—and visuals—that demystify AI and earn stakeholder trust, from taglines to whitepapers to keynotes.",
      icon: Brain,
      iconColor: "text-finance-accent-purple",
      borderColor: "bg-finance-accent-purple",
      bulletColor: "text-finance-accent-purple",
      deliverables: [
        "Brand narrative & messaging architecture",
        "Investor decks, press releases, and AI explainer visuals",
        "Ghost‑written op‑eds & conference speeches"
      ]
    }
  ];

  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Service Portfolio</h2>
        <div className="w-24 h-1 bg-finance-accent-blue mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
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
      
      <div className="text-center mt-8">
        <Button variant="outline" className="border-finance-accent-blue text-finance-accent-blue hover:bg-finance-accent-blue/10 hover:text-white">
          View All Services
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;

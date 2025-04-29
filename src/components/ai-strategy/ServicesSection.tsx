
import React from 'react';
import { Button } from '@/components/ui/button';
import ServiceCard from './ServiceCard';
import { 
  FileText, 
  Users, 
  LineChart,
  Shield, 
  BarChart3,
  Globe,
  DollarSign,
  Briefcase
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Business-Plan Assessment",
      tagline: "Stress-test your roadmap and surface silent landmines before investors do.",
      description: "",
      icon: FileText,
      iconColor: "text-finance-accent-blue",
      borderColor: "bg-finance-accent-blue",
      bulletColor: "text-finance-accent-blue",
      deliverables: [
        "20-point viability score",
        "Risk heat-map",
        "90-day fix list"
      ]
    },
    {
      title: "Competitive Analysis",
      tagline: "See where rivals outspend, underserve, and how you can overtake them.",
      description: "",
      icon: Users,
      iconColor: "text-finance-accent-purple",
      borderColor: "bg-finance-accent-purple",
      bulletColor: "text-finance-accent-purple",
      deliverables: [
        "Rival SWOT deck",
        "Feature-gap matrix",
        "Attack-plan storyboard"
      ]
    },
    {
      title: "Marketing-Plan Audit",
      tagline: "Tighten campaigns, slash waste, and speak to buyers who actually convert.",
      description: "",
      icon: LineChart,
      iconColor: "text-finance-accent-orange",
      borderColor: "bg-finance-accent-orange",
      bulletColor: "text-finance-accent-orange",
      deliverables: [
        "Funnel leak report",
        "Persona refresh",
        "60-day refocus plan"
      ]
    },
    {
      title: "Patent Analysis",
      tagline: "Validate, strengthen, or pivot your IP before costly filings.",
      description: "",
      icon: Shield,
      iconColor: "text-finance-chart-green",
      borderColor: "bg-finance-chart-green",
      bulletColor: "text-finance-chart-green",
      deliverables: [
        "Claims overlap map",
        "Patentability opinion",
        "Licensing roadmap"
      ]
    },
    {
      title: "Shareholder Alternatives",
      tagline: "Make capital-structure moves that safeguard value in any market cycle.",
      description: "",
      icon: BarChart3,
      iconColor: "text-finance-accent-blue",
      borderColor: "bg-finance-accent-blue",
      bulletColor: "text-finance-accent-blue",
      deliverables: [
        "Scenario models",
        "Pros/cons cheat-sheet",
        "Board-ready memo"
      ]
    },
    {
      title: "Financial Modeling",
      tagline: "Build forward-looking models that anticipate market shifts and identify untapped opportunities.",
      description: "",
      icon: Globe,
      iconColor: "text-[#D946EF]",
      borderColor: "bg-[#D946EF]",
      bulletColor: "text-[#D946EF]",
      deliverables: [
        "5-year projection toolkit",
        "Sensitivity analysis matrix",
        "Executive decision dashboard"
      ]
    },
    {
      title: "Cost Optimization",
      tagline: "Slash operational expenses through intelligent automation and process optimization.",
      description: "",
      icon: DollarSign,
      iconColor: "text-[#2DD4BF]",
      borderColor: "bg-[#2DD4BF]",
      bulletColor: "text-[#2DD4BF]",
      deliverables: [
        "Expense reduction roadmap",
        "Automation opportunity matrix",
        "90-day cost-cutting plan"
      ]
    },
    {
      title: "Executive AI Coaching",
      tagline: "Empower executives to understand and leverage the latest AI technologies in their business strategies.",
      description: "",
      icon: Briefcase,
      iconColor: "text-[#9b87f5]",
      borderColor: "bg-[#9b87f5]",
      bulletColor: "text-[#9b87f5]",
      deliverables: [
        "60-minute weekly AI literacy sessions",
        "Custom AI implementation roadmap",
        "Emerging technology briefings"
      ]
    }
  ];

  return (
    <section className="space-y-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
        <div className="w-24 h-1 bg-[#0ea5e9] mx-auto"></div>
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
      
      <div className="text-center mt-12">
        <Button variant="outline" className="border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9]/10 hover:text-white">
          View All Services
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;

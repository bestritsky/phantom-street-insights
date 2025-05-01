
import React from 'react';
import { 
  Lightbulb, 
  Presentation, 
  FileSearch, 
  Shield,
  Users,
  Brain,
  Cog,
  Award,
  Play,
  RefreshCw
} from 'lucide-react';

const ExecutiveEnablementSection: React.FC = () => {
  const transformationSteps = [
    {
      title: "Use Case Ideation",
      description: "Cross-functional brainstorming to generate potential AI use cases, prioritize based on business objectives, and develop detailed descriptions for maximum impact.",
      icon: Lightbulb,
      iconColor: "text-finance-accent-orange"
    },
    {
      title: "Value Proposition Development",
      description: "Create compelling value propositions for each AI use case, quantify potential benefits, and identify key performance indicators (KPIs) to track success.",
      icon: Presentation,
      iconColor: "text-finance-accent-purple"
    },
    {
      title: "Proof of Concept Planning",
      description: "Select high-potential use cases for POC development, define scope and timeline, and identify required resources, data, and technologies.",
      icon: FileSearch,
      iconColor: "text-finance-chart-green"
    },
    {
      title: "Phased Implementation",
      description: "Develop a strategic implementation roadmap with clear milestones, deliverables, timelines, and assigned responsibilities for structured execution.",
      icon: Play,
      iconColor: "text-finance-accent-blue"
    },
    {
      title: "Change Management",
      description: "Create a comprehensive change management plan to identify adoption barriers, develop mitigation strategies, and align stakeholders through strategic communication.",
      icon: Users,
      iconColor: "text-[#9b87f5]"
    },
    {
      title: "Capability Building",
      description: "Assess current AI skills, identify gaps, and develop upskilling plans to foster a culture of continuous learning and innovation.",
      icon: Brain,
      iconColor: "text-finance-accent-orange"
    },
    {
      title: "Governance & Ethics",
      description: "Establish frameworks for responsible AI development, define policies for data privacy, security, and ethical practices with ongoing monitoring protocols.",
      icon: Shield,
      iconColor: "text-[#2DD4BF]"
    },
    {
      title: "Executive Alignment",
      description: "Present the AI Transformation Roadmap to leadership, secure buy-in for proposed initiatives, and establish a shared vision for organizational transformation.",
      icon: Award,
      iconColor: "text-finance-accent-purple"
    },
    {
      title: "Pilot Execution",
      description: "Provide hands-on support for pilot projects, monitor progress, mitigate risks, and share success stories to build momentum across the organization.",
      icon: Cog,
      iconColor: "text-[#33C3F0]"
    },
    {
      title: "Continuous Improvement",
      description: "Implement ongoing monitoring of AI initiatives, collect feedback to refine the roadmap, and identify new opportunities based on initial successes.",
      icon: RefreshCw,
      iconColor: "text-finance-chart-green"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Transformation Roadmap</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">Our comprehensive approach guides organizations through every stage of AI adoption, from ideation to implementation and beyond.</p>
          <div className="w-24 h-1 bg-[#0ea5e9] mx-auto"></div>
        </div>
        
        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {transformationSteps.map((step, index) => (
            <div key={index} className="chart-container hover-glow p-6 relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-[#1e293b] border-2 border-[#0ea5e9] mb-4`}>
                <step.icon className={`h-8 w-8 ${step.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile View - Vertical Timeline */}
        <div className="md:hidden space-y-8">
          {transformationSteps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#1e293b] border-2 border-[#0ea5e9]`}>
                  <step.icon className={`h-6 w-6 ${step.iconColor}`} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white font-semibold mb-4">Ready to begin your AI transformation journey?</p>
          <a href="#engagement" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0ea5e9] hover:bg-[#0ea5e9]/80 transition duration-300">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveEnablementSection;

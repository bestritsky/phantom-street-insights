
import React from 'react';
import { 
  PhoneCall, 
  Search, 
  FileText, 
  Headphones 
} from 'lucide-react';

const ExecutiveEnablementSection: React.FC = () => {
  const steps = [
    {
      title: "Fit Call",
      timeframe: "15 min",
      description: "We clarify your goal, confirm data availability, and agree on success metrics. If we're not the right fit, we'll point you to someone who is.",
      icon: PhoneCall,
      iconColor: "text-finance-accent-orange"
    },
    {
      title: "Deep-Dive Sprint",
      timeframe: "1 Week",
      description: "Our analysts and GPT-driven models comb through plans, markets, or patents, then pressure-test findings in a live expert roundtable.",
      icon: Search,
      iconColor: "text-finance-accent-purple"
    },
    {
      title: "Action Brief Delivery",
      timeframe: "60 min",
      description: "A concise 5-page report with red-flag issues, ROI-ranked fixes, and a 90-day execution timeline presented in a 60-minute walkthrough.",
      icon: FileText,
      iconColor: "text-finance-chart-green"
    },
    {
      title: "Follow-Up Coaching",
      timeframe: "Optional",
      description: "Weekly check-ins and on-demand Q&A to keep implementation on track for as little as one additional sprint.",
      icon: Headphones,
      iconColor: "text-finance-accent-blue"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-[#0ea5e9] mx-auto"></div>
        </div>
        
        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:flex justify-between items-start relative mb-12">
          {/* Connector Line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-gray-700"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center w-1/4 px-4">
              {/* Step Number Circle */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-[#1e293b] border-2 border-[#0ea5e9] z-10 mb-6`}>
                <step.icon className={`h-8 w-8 ${step.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 text-center">
                {step.title}
                <span className="block text-sm font-medium text-gray-400 mt-1">
                  {step.timeframe}
                </span>
              </h3>
              <p className="text-gray-300 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#1e293b] border-2 border-[#0ea5e9]`}>
                  <span className="text-lg font-bold text-white">{index + 1}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {step.title}
                  <span className="ml-2 text-sm font-medium text-gray-400">
                    {step.timeframe}
                  </span>
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveEnablementSection;

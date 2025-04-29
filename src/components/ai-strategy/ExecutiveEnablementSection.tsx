
import React from 'react';
import ExecutiveEnablementCard from './ExecutiveEnablementCard';
import { Bot, AlertTriangle, Cpu, Shield } from 'lucide-react';

const ExecutiveEnablementSection: React.FC = () => {
  const executiveTools = [
    {
      title: "Private AI Copilot & Workflow Optimization",
      tagline: "Your Confidential AI Sidekick—Available 24/7.",
      description: "We set up a secure, sandboxed AI workspace tuned to your personal workflows—drafting memos, parsing board decks, monitoring markets—so you act faster and think deeper without risking IP or privacy.",
      icon: Bot,
      iconColor: "text-finance-accent-orange"
    },
    {
      title: "Strategic Reputation & Risk Dashboard",
      tagline: "See Threats Before Headlines Hit.",
      description: "A live dashboard blends sentiment analysis, policy tracking, and supply‑chain flags so you're ready when tariffs, layoffs, or social storms put your name in the spotlight.",
      icon: AlertTriangle,
      iconColor: "text-finance-accent-purple"
    },
    {
      title: "Executive Upskilling & Prompt Gym",
      tagline: "Stay Sharp—30 Minutes a Week.",
      description: "Bite‑sized coaching sessions keep you fluent in the latest AI tools, frameworks, and compliance moves—so you outpace disruption without burning hours.",
      icon: Cpu,
      iconColor: "text-finance-chart-green"
    },
    {
      title: "Wealth, Portfolio & Career Stress‑Test",
      tagline: "Future‑Proof Your Livelihood.",
      description: "AI‑driven scenario models quantify how geopolitical swings, policy shifts, and sector‑specific AI disruption might impact your holdings and career trajectory—then chart mitigation moves.",
      icon: Shield,
      iconColor: "text-finance-accent-blue"
    }
  ];

  return (
    <section className="chart-container p-8 md:p-12 space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Personal Executive AI Enablement Suite</h2>
        <div className="w-24 h-1 bg-finance-accent-orange mx-auto"></div>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Private AI solutions designed for executives who need to stay ahead in rapidly changing markets
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {executiveTools.map((tool, index) => (
          <ExecutiveEnablementCard
            key={index}
            title={tool.title}
            tagline={tool.tagline}
            description={tool.description}
            icon={tool.icon}
            iconColor={tool.iconColor}
          />
        ))}
      </div>
    </section>
  );
};

export default ExecutiveEnablementSection;


import React from 'react';
import { Button } from '@/components/ui/button';

const EngagementSection: React.FC = () => {
  const engagements = [
    {
      name: "Discovery Sprint",
      duration: "2 weeks",
      outcome: "Rapid opportunity scan & executive briefing"
    },
    {
      name: "Transformation Roadmap",
      duration: "4 weeks",
      outcome: "Use‑case portfolio, KPI dashboard, 90‑day plan"
    },
    {
      name: "Implementation Oversight",
      duration: "3‑6 months",
      outcome: "Pilot build‑out, success metrics, change‑management playbook"
    },
    {
      name: "AI Steering‑Committee Retainer",
      duration: "Quarterly",
      outcome: "On‑call strategic guidance, quarterly refresh of roadmaps & risk models"
    }
  ];

  return (
    <section className="chart-container p-8 md:p-12 space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engagement Models & Next Steps</h2>
        <div className="w-24 h-1 bg-finance-accent-blue mx-auto"></div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="finance-table">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left font-semibold text-md text-finance-accent-blue">Engagement</th>
              <th className="text-left font-semibold text-md text-finance-accent-blue">Duration</th>
              <th className="text-left font-semibold text-md text-finance-accent-blue">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {engagements.map((engagement, index) => (
              <tr key={index} className="hover:bg-white/5">
                <td className="py-4 font-medium">{engagement.name}</td>
                <td className="py-4">{engagement.duration}</td>
                <td className="py-4">{engagement.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="text-center mt-8">
        <Button className="bg-finance-accent-blue hover:bg-finance-accent-blue/80 text-white font-semibold py-6 px-8 text-lg">
          Schedule Initial Consultation
        </Button>
        <p className="text-gray-400 mt-4">No obligation. Discover how AI can transform your business strategy.</p>
      </div>
    </section>
  );
};

export default EngagementSection;

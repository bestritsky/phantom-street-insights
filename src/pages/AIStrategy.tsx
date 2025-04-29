
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  BarChart3, 
  Network, 
  Globe, 
  PieChart,
  LineChart,
  BookOpen, 
  Star, 
  Shield, 
  Bot, 
  AlertTriangle, 
  Cpu, 
  Presentation, 
  UserCog
} from 'lucide-react';

const AIStrategy: React.FC = () => {
  return (
    <div className="min-h-screen bg-finance-dark-blue flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section className="relative chart-container overflow-hidden p-8 md:p-12 mb-8">
          <div 
            className="absolute inset-0 z-0 opacity-20" 
            style={{
              backgroundImage: 'url(https://binaryadvisers.com/wp-content/uploads/2025/04/Professional_Mode_Create_a_dynamic_20_second_motio-ezgif.com-optimize.gif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px) brightness(0.7)',
              mixBlendMode: 'overlay',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-finance-accent-blue/10 to-finance-accent-purple/5 z-0"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Critical‑Thinking AI Strategy for an Uncertain World
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transform tariff turmoil, supply‑chain fractures, and geopolitical shifts into growth 
              with pragmatic AI playbooks grounded in rigorous thinking.
            </p>
            <Button className="bg-finance-accent-blue hover:bg-finance-accent-blue/80 text-white font-semibold py-6 px-8 text-lg">
              Book a Risk & Resilience Call
            </Button>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              From C‑suite workshops to real‑time trade‑flow dashboards, we fuse AI with disciplined 
              critical‑thinking frameworks—so you stay ahead when borders close, costs spike, or partners pivot.
            </p>
            
            <div className="mt-12 p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
              <blockquote className="italic text-xl">
                "AI will not take over your job. People who use critical thinking will."
                <footer className="mt-2 text-finance-accent-blue">— Henry Bestritsky</footer>
              </blockquote>
            </div>
          </div>
        </section>
        
        {/* Core Service Portfolio */}
        <section className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Service Portfolio</h2>
            <div className="w-24 h-1 bg-finance-accent-blue mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="chart-container hover-glow p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-finance-accent-blue"></div>
              <Brain className="text-finance-accent-blue mb-4 h-10 w-10" />
              <h3 className="text-xl font-bold mb-2">AI Leadership & Change‑Management Advisory</h3>
              <p className="text-finance-accent-blue font-semibold mb-3">Lead the AI Revolution—No Tech Degree Required.</p>
              <p className="text-gray-300 mb-4">Equip non-technical C‑suite and senior leaders with the mindset, playbooks, and coaching to inspire confident AI adoption across the organization.</p>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-white">Signature Deliverables:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-finance-accent-blue mr-2">•</span> 
                    Executive workshops that translate AI into board‑level outcomes
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-blue mr-2">•</span> 
                    Psychological‑safety frameworks so teams feel free to experiment
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-blue mr-2">•</span> 
                    1:1 leadership coaching focused on critical‑thinking & decision cadence
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="chart-container hover-glow p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-finance-accent-purple"></div>
              <BarChart3 className="text-finance-accent-purple mb-4 h-10 w-10" />
              <h3 className="text-xl font-bold mb-2">End‑to‑End AI Transformation Roadmaps</h3>
              <p className="text-finance-accent-purple font-semibold mb-3">From Idea to Impact in 90 Days.</p>
              <p className="text-gray-300 mb-4">We map vision to validated use‑cases, quantify ROI, and stand up a governance model that keeps every initiative on time and on budget—even when global conditions shift overnight.</p>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-white">Signature Deliverables:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-finance-accent-purple mr-2">•</span> 
                    Use‑case portfolio & capability gap analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-purple mr-2">•</span> 
                    Governance & KPI dashboard build‑out
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-purple mr-2">•</span> 
                    90‑day implementation sprint plan
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="chart-container hover-glow p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-finance-accent-orange"></div>
              <LineChart className="text-finance-accent-orange mb-4 h-10 w-10" />
              <h3 className="text-xl font-bold mb-2">AI‑Driven Market & Competitive Insight</h3>
              <p className="text-finance-accent-orange font-semibold mb-3">Spot Risks & Opportunities Before Rivals Do.</p>
              <p className="text-gray-300 mb-4">We distill oceans of market noise into decisive actions—revealing pricing shifts, patent conflicts, and emerging threats—so you can act first and grow faster.</p>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-white">Signature Deliverables:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-finance-accent-orange mr-2">•</span> 
                    Competitor deep‑dives & opportunity sizing
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-orange mr-2">•</span> 
                    Real‑time news/patent/tariff alerting & dashboards
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-orange mr-2">•</span> 
                    Decision‑ready briefing decks
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="chart-container hover-glow p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-finance-chart-green"></div>
              <Globe className="text-finance-chart-green mb-4 h-10 w-10" />
              <h3 className="text-xl font-bold mb-2">Geopolitical & Supply‑Chain Risk Analytics</h3>
              <p className="text-finance-chart-green font-semibold mb-3">Navigate Tariffs, Decoupling & Disruption—Today.</p>
              <p className="text-gray-300 mb-4">Scenario models fuse AI forecasting with live trade‑flow intelligence so you can dodge tariff shocks, ally decoupling, and sudden supply‑chain fractures—before they hit.</p>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-white">Signature Deliverables:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-finance-chart-green mr-2">•</span> 
                    Forward‑earnings stress tests
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-chart-green mr-2">•</span> 
                    Tariff & trade‑war impact simulators
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-chart-green mr-2">•</span> 
                    Geopolitical trigger‑metric dashboards
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 5 */}
            <div className="chart-container hover-glow p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-finance-accent-blue"></div>
              <PieChart className="text-finance-accent-blue mb-4 h-10 w-10" />
              <h3 className="text-xl font-bold mb-2">Operational Cost‑Takeout & CapEx Optimization</h3>
              <p className="text-finance-accent-blue font-semibold mb-3">Unlock 25–40% Savings with Smart Automation.</p>
              <p className="text-gray-300 mb-4">Identify the high‑impact process bottlenecks, then deploy low‑code & GenAI automations to slash cycle times and CapEx.</p>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-white">Signature Deliverables:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-finance-accent-blue mr-2">•</span> 
                    Bottom‑up cost curves & savings roadmap
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-blue mr-2">•</span> 
                    Automation blueprints (Airtable ↔ Make.com, RPA, LLM agents)
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-blue mr-2">•</span> 
                    Before‑and‑after ROI trackers
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 6 */}
            <div className="chart-container hover-glow p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-finance-accent-purple"></div>
              <BookOpen className="text-finance-accent-purple mb-4 h-10 w-10" />
              <h3 className="text-xl font-bold mb-2">Brand Positioning, Thought‑Leadership & Copy</h3>
              <p className="text-finance-accent-purple font-semibold mb-3">Tell Stories that Make AI Human.</p>
              <p className="text-gray-300 mb-4">Craft messaging—and visuals—that demystify AI and earn stakeholder trust, from taglines to whitepapers to keynotes.</p>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-white">Signature Deliverables:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-finance-accent-purple mr-2">•</span> 
                    Brand narrative & messaging architecture
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-purple mr-2">•</span> 
                    Investor decks, press releases, and AI explainer visuals
                  </li>
                  <li className="flex items-start">
                    <span className="text-finance-accent-purple mr-2">•</span> 
                    Ghost‑written op‑eds & conference speeches
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* View More Services Button */}
          <div className="text-center mt-8">
            <Button variant="outline" className="border-finance-accent-blue text-finance-accent-blue hover:bg-finance-accent-blue/10 hover:text-white">
              View All Services
            </Button>
          </div>
        </section>
        
        {/* Personal Executive AI Enablement Suite */}
        <section className="chart-container p-8 md:p-12 space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Personal Executive AI Enablement Suite</h2>
            <div className="w-24 h-1 bg-finance-accent-orange mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Private AI solutions designed for executives who need to stay ahead in rapidly changing markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Executive Suite Item 1 */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover-glow">
              <Bot className="text-finance-accent-orange mb-4 h-8 w-8" />
              <h3 className="text-xl font-bold mb-2">Private AI Copilot & Workflow Optimization</h3>
              <p className="text-finance-accent-orange font-semibold mb-3">Your Confidential AI Sidekick—Available 24/7.</p>
              <p className="text-gray-300 mb-4">We set up a secure, sandboxed AI workspace tuned to your personal workflows—drafting memos, parsing board decks, monitoring markets—so you act faster and think deeper without risking IP or privacy.</p>
            </div>
            
            {/* Executive Suite Item 2 */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover-glow">
              <AlertTriangle className="text-finance-accent-purple mb-4 h-8 w-8" />
              <h3 className="text-xl font-bold mb-2">Strategic Reputation & Risk Dashboard</h3>
              <p className="text-finance-accent-purple font-semibold mb-3">See Threats Before Headlines Hit.</p>
              <p className="text-gray-300 mb-4">A live dashboard blends sentiment analysis, policy tracking, and supply‑chain flags so you're ready when tariffs, layoffs, or social storms put your name in the spotlight.</p>
            </div>
            
            {/* Executive Suite Item 3 */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover-glow">
              <Cpu className="text-finance-chart-green mb-4 h-8 w-8" />
              <h3 className="text-xl font-bold mb-2">Executive Upskilling & Prompt Gym</h3>
              <p className="text-finance-chart-green font-semibold mb-3">Stay Sharp—30 Minutes a Week.</p>
              <p className="text-gray-300 mb-4">Bite‑sized coaching sessions keep you fluent in the latest AI tools, frameworks, and compliance moves—so you outpace disruption without burning hours.</p>
            </div>
            
            {/* Executive Suite Item 4 */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover-glow">
              <Shield className="text-finance-accent-blue mb-4 h-8 w-8" />
              <h3 className="text-xl font-bold mb-2">Wealth, Portfolio & Career Stress‑Test</h3>
              <p className="text-finance-accent-blue font-semibold mb-3">Future‑Proof Your Livelihood.</p>
              <p className="text-gray-300 mb-4">AI‑driven scenario models quantify how geopolitical swings, policy shifts, and sector‑specific AI disruption might impact your holdings and career trajectory—then chart mitigation moves.</p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Positioning */}
        <section className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Positioning the Portfolio</h2>
            <div className="w-24 h-1 bg-finance-chart-green mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Star className="text-finance-accent-blue mb-3 h-7 w-7" />
              <h3 className="font-bold text-lg mb-2">Critical‑Thinking First</h3>
              <p className="text-gray-300">We strip away jargon and anchor every recommendation to tangible business outcomes.</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Shield className="text-finance-accent-purple mb-3 h-7 w-7" />
              <h3 className="font-bold text-lg mb-2">Red‑Team Honesty</h3>
              <p className="text-gray-300">Each deliverable includes a "What Could Go Wrong?" section with mitigation tactics—your built‑in devil's advocate.</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Globe className="text-finance-chart-green mb-3 h-7 w-7" />
              <h3 className="font-bold text-lg mb-2">Geopolitical Agility</h3>
              <p className="text-gray-300">Our models ingest live trade and policy data, keeping your strategy aligned with shifting tariffs, sanctions, and alliances.</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Network className="text-finance-accent-orange mb-3 h-7 w-7" />
              <h3 className="font-bold text-lg mb-2">Lean, Automated Delivery</h3>
              <p className="text-gray-300">Heavy use of GenAI & low‑code yields Gartner, Forrester & KPMG‑caliber insight at SMB pricing.</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <UserCog className="text-finance-accent-blue mb-3 h-7 w-7" />
              <h3 className="font-bold text-lg mb-2">Community Roots</h3>
              <p className="text-gray-300">Born in New Milford's Rotary, we pilot civic projects first, proving value before scaling to private‑sector clients.</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Presentation className="text-finance-accent-purple mb-3 h-7 w-7" />
              <h3 className="font-bold text-lg mb-2">Modular Engagements</h3>
              <p className="text-gray-300">Fixed‑scope sprints (2‑4 weeks) flow into a flexible AI Steering‑Committee Retainer for ongoing guidance.</p>
            </div>
          </div>
        </section>
        
        {/* Engagement Models & Next Steps */}
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
                <tr className="hover:bg-white/5">
                  <td className="py-4 font-medium">Discovery Sprint</td>
                  <td className="py-4">2 weeks</td>
                  <td className="py-4">Rapid opportunity scan & executive briefing</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 font-medium">Transformation Roadmap</td>
                  <td className="py-4">4 weeks</td>
                  <td className="py-4">Use‑case portfolio, KPI dashboard, 90‑day plan</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 font-medium">Implementation Oversight</td>
                  <td className="py-4">3‑6 months</td>
                  <td className="py-4">Pilot build‑out, success metrics, change‑management playbook</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="py-4 font-medium">AI Steering‑Committee Retainer</td>
                  <td className="py-4">Quarterly</td>
                  <td className="py-4">On‑call strategic guidance, quarterly refresh of roadmaps & risk models</td>
                </tr>
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
      </main>
      
      <footer className="py-6 px-4 border-t border-gray-800 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              <p>© 2025 PhantomStreet Insights. Premium financial data and research.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-finance-accent-blue transition-colors">Terms</a>
              <a href="#" className="hover:text-finance-accent-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-finance-accent-blue transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIStrategy;

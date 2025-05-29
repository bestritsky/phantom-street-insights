
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TrendingUp, Users, BookOpen, DollarSign, Brain, Lightbulb } from 'lucide-react';

const businessResults = [
  {
    id: "measurable-results",
    title: "Measurable Business Results",
    icon: TrendingUp,
    content: "Across industries in 2025, human‑guided AI is no longer a nice‑to‑have; it is the growth engine. Stanford's AI Index shows firms that embed AI into workflows post productivity jumps of 20‑30% and unlock a $2.6‑4.4 trillion annual upside, while teams that layer critical‑thinking rituals on top of automation hit "flow‑state" surges of 500% output on complex work. A complementary World Economic Forum survey found that 51% of SMBs adopting generative AI recorded double‑digit revenue gains because employees could redirect time from rote tasks to strategic problem‑solving."
  },
  {
    id: "personal-growth",
    title: "Personal Growth & Purpose",
    icon: Users,
    content: "When the bots take the busywork, people rediscover purpose. Akkodis' 30,000‑participant study reports a 68% jump in job satisfaction for workers who collaborate with AI, most citing reclaimed creativity and better work‑life balance. Temple University's 2025 research confirms the mechanism: AI frees cognitive bandwidth, making employees "more creative and happier," while Writer/Workplace Intelligence shows satisfaction soars only in organisations that teach staff to question and align AI outputs with personal values."
  },
  {
    id: "professional-development",
    title: "Professional Development",
    icon: BookOpen,
    content: "AI is rewriting career growth, but only for those who pair its insights with sharp reasoning. DataHub Analytics finds AI‑powered learning platforms can pinpoint skill gaps in real time, yet the biggest leap comes when employees interrogate those recommendations—firms that blend AI guidance with critical‑thinking coaching see a 71% rise in adaptability and a 68% lift in leadership‑development success. Phoenix University echoes this, noting 93% of "future‑ready" workers received personalised AI plans plus reflection tools, while MIT Sloan warns that without up‑skilling in analysis and judgement, technical training alone stalls."
  },
  {
    id: "roi-satisfaction",
    title: "ROI & Satisfaction",
    icon: DollarSign,
    content: "The clearest financial signal in 2025 boardrooms is that AI pays back fastest when humans steer the helm. Harvard Business Review shows AI projects that elevate service quality—not just cut costs—drive outsized returns; Allwork.Space finds 91% of thriving entrepreneurs call technology "essential," and 72% plan fresh AI investments by year‑end. McKinsey's global survey explains why: companies coupling AI roll‑outs with structured critical‑thinking programs post 40% higher ROI than tech‑only peers, a gap that Forrester predicts will widen as disciplined decision frameworks become table stakes."
  },
  {
    id: "future-ready-skills",
    title: "Future‑Ready Skills",
    icon: Brain,
    content: "The job market now demands a fusion of AI literacy and quintessentially human strengths. The World Economic Forum's Future of Jobs 2025 ranks analytical thinking alongside AI and data skills in the top‑10 growth list, warning that 40% of core skills will change by 2030. Forbes and LinkedIn analyses confirm the premium: professionals who combine AI know‑how with creativity, empathy and critical judgement command 35‑45% higher compensation, while high‑EQ managers outperform peers by 30%. MIT Sloan adds that such "fusion skills" ensure humans complement—rather than compete with—machines."
  },
  {
    id: "critical-thinking",
    title: "Critical Thinking as Force Multiplier",
    icon: Lightbulb,
    content: "The meta‑skill that ties everything together is disciplined inquiry. Stanford HAI shows AI initiatives guided by formal critical‑thinking frameworks are 40‑60% more likely to succeed, and McKinsey links the same habit to top‑quartile ROI. Harvard Business Review calls AI a "thought partner," valuable only when leaders probe its assumptions; MIT and WEF data underline the point, with 78% of employers rating critical thinking "essential" for AI‑augmented roles—far above pure technical prowess. In practice, asking better questions, spotting bias, and stress‑testing models turns AI from automated helper into an exponential amplifier of human ingenuity."
  }
];

const ExpandableBusinessResults: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why AI + Human Intelligence Wins
        </h2>
        <div className="w-24 h-1 bg-[#0ea5e9] mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Discover the compelling evidence behind the transformative power of human-guided AI
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {businessResults.map((result) => {
            const IconComponent = result.icon;
            return (
              <AccordionItem 
                key={result.id} 
                value={result.id}
                className="bg-finance-dark-gray/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-[#0ea5e9]/30 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0ea5e9]/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#0ea5e9]" />
                    </div>
                    <span className="text-white font-semibold text-lg">{result.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-14">
                    <p className="text-gray-300 leading-relaxed text-base">
                      {result.content}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default ExpandableBusinessResults;

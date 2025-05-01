
import { LucideIcon, FileText, Users, LineChart, Shield, BarChart3, Globe, DollarSign, Briefcase, Calendar, Book, Truck, MessageSquare } from 'lucide-react';

interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  borderColor: string;
  bulletColor: string;
  deliverables: string[];
}

export const servicesData: ServiceData[] = [
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
    title: "Geopolitical Risk Analysis",
    tagline: "Navigate global political uncertainties that impact markets, regulations, and supply chains to protect your international business interests.",
    description: "",
    icon: Globe,
    iconColor: "text-[#33C3F0]",
    borderColor: "bg-[#33C3F0]",
    bulletColor: "text-[#33C3F0]",
    deliverables: [
      "Regional risk assessment matrix",
      "Supply chain vulnerability report",
      "Regulatory impact forecast",
      "Market entry risk profile"
    ]
  },
  {
    title: "Executive Upskilling & Prompt Gym",
    tagline: "Stay Sharp—30 Minutes a Week. Bite-sized coaching sessions keep you fluent in the latest AI tools, frameworks, and compliance moves—so you outpace disruption without burning hours.",
    description: "",
    icon: Briefcase,
    iconColor: "text-[#9b87f5]",
    borderColor: "bg-[#9b87f5]",
    bulletColor: "text-[#9b87f5]",
    deliverables: [
      "Weekly 30-minute AI fluency sessions",
      "Strategic AI Direction Templates",
      "Practical AI implementation playbooks"
    ]
  },
  {
    title: "Conversational Lifelike Avatars",
    tagline: "Humanize your digital presence with AI-powered avatars, enhanced by custom knowledge base integration, that engage customers, build trust, and deliver personalized experiences 24/7.",
    description: "",
    icon: MessageSquare,
    iconColor: "text-[#9b87f5]",
    borderColor: "bg-[#9b87f5]",
    bulletColor: "text-[#9b87f5]",
    deliverables: [
      "Custom avatar design & voice matching",
      "Conversation flow architecture",
      "Emotional intelligence training",
      "Knowledge base integration for personalized responses",
      "Automation workflow blueprint",
      "Email system integration",
      "CRM data synchronization",
      "Internal process optimization"
    ]
  }
];

export interface Capability {
  id: number;
  title: string;
  headline: string;
  description: string;
  highlights: string[];
  color: string;
  icon: string;
}

export const capabilities: Capability[] = [
  {
    id: 1,
    title: "Business Websites",
    headline: "Responsive websites for businesses and personal brands.",
    description: "Modern, polished web experiences tailored to business goals and audience needs.",
    highlights: [
      "Landing Pages",
      "Responsive Design",
      "SEO Ready",
      "Performance",
      "Brand Storytelling",
      "Conversion Optimization",
      "Contact Funnels",
    ],
    color: "blue",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Backend Systems",
    headline: "Scalable backend architecture using Java and REST APIs.",
    description: "Reliable server-side systems designed for business logic, security, and growth.",
    highlights: [
      "Authentication",
      "REST APIs",
      "Business Logic",
      "Security",
      "API Documentation",
      "Caching Strategies",
      "Fault Tolerance",
    ],
    color: "indigo",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Management Systems",
    headline: "Custom software for educational institutions and businesses.",
    description: "Practical applications that streamline operations, records, and user workflows.",
    highlights: [
      "CRUD",
      "Dashboards",
      "Database Integration",
      "User Management",
      "Role-Based Access",
      "Workflow Automation",
      "Reporting Tools",
    ],
    color: "teal",
    icon: "📊",
  },
  {
    id: 4,
    title: "Database Solutions",
    headline: "Efficient relational database design and SQL optimization.",
    description: "Organized data structures that improve performance, clarity, and maintainability.",
    highlights: [
      "Schema Design",
      "Normalization",
      "Queries",
      "Performance",
      "Data Migration",
      "Backup Strategies",
      "Indexing",
    ],
    color: "emerald",
    icon: "🗄️",
  },
  {
    id: 5,
    title: "IoT Solutions",
    headline: "Smart monitoring systems using embedded hardware and sensors.",
    description: "Connected devices and monitoring setups that automate detection and responses.",
    highlights: [
      "Arduino",
      "NodeMCU",
      "Sensors",
      "Automation",
      "Real-Time Alerts",
      "Wireless Connectivity",
      "Data Logging",
    ],
    color: "amber",
    icon: "📡",
  },
  {
    id: 6,
    title: "Custom Software",
    headline: "Tailor-made software solutions based on project requirements.",
    description: "Flexible development aligned with specific business needs, constraints, and goals.",
    highlights: [
      "Requirement Analysis",
      "Architecture",
      "Development",
      "Deployment",
      "Proof of Concept",
      "Third-Party APIs",
      "Maintenance Planning",
    ],
    color: "rose",
    icon: "🛠️",
  },
];

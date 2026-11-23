export interface CareerJourneyEntry {
  Date: string;
  title: string;
  Company: string;
  location: string;
  description: string[];
  skills?: string[];
}

export const careerSectionContent = {
  kicker: "Career Journey",
  title: "My Work Experience and Education",
};

export const careerJourneyEntries: CareerJourneyEntry[] = [
  {
    Date: "July, 2024 - Present",
    title: "Software Development Engineer 1",
    Company: "HashedIn by Deloitte",
    location: "Bengaluru, India",
    description: [
      "Lead a frontend team of 4 engineers across 2 organizations, building an enterprise Accounts Payable automation product.",
      "Own code reviews, sprint coordination, and cross-team technical decisions.",
      "Integrated AI-powered invoice extraction APIs for OCR-based field population across 300K+ invoices annually, representing $5B+ in invoice value.",
      "Architected a config-driven approval-workflow UI for multi-tier invoice routing used by 60+ enterprise users.",
      "Owned role-based access control across admin and manager panels.",
      "Built real-time Recharts dashboards showing invoice-pipeline metrics and approval trends.",
    ],
    skills: ["React", "FastAPI", "GraphQL", "AWS", "Gen AI"],
  },
  {
    Date: "February, 2024 - April, 2024",
    title: "TezIndia BuilderCamp 2.0",
    Company: "Tezos",
    location: "Remote",
    description: [
      "Learned Tezos blockchain development, including dApps and smart contracts.",
    ],
    skills: ["Python", "Next.js", "Smart contract", "NumPy"],
  },
  {
    Date: "September, 2023 - May, 2024",
    title: "Jr. Full Stack Developer",
    Company: "Alphabi Solutions",
    location: "Remote",
    description: [
      "Contributed to the development and maintenance of an inventory system for a construction company.",
      "Implemented user authentication for authorized access to head and site offices.",
    ],
    skills: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
  },
  {
    Date: "March, 2023 - August, 2023",
    title: "Software Engineering Intern",
    Company: "Alphabi Solutions",
    location: "Remote",
    description: [
      "Collaborated on applications for a leading labs franchisor.",
      "Spearheaded the franchisor platform, improving operational efficiency by 20%.",
    ],
    skills: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
  },
  {
    Date: "2019 - 2023",
    title: "Bachelor of Engineering(B.E) - ISE",
    Company: "Dayanand Sagar College of Engineering",
    location: "Bengaluru, India",
    description: [
      "Studied core computer science subjects, including DBMS, operating systems, and Java.",
    ],
  },
];

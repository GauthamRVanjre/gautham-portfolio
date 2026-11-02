export interface CareerJourneyEntry {
  Date: string;
  title: string;
  Company: string;
  location: string;
  description: string;
  skills?: string[];
}

export const careerSectionContent = {
  kicker: "Career Journey",
  title: "My Work Experience and Education",
};

export const careerJourneyEntries: CareerJourneyEntry[] = [
  {
    Date: "July, 2024 - Present",
    title: "SDE-1 UI",
    Company: "HashedIn by Deloitte",
    location: "Bengaluru, India",
    description:
      "Collaborating with a team of developers to build interactive and responsive UI components using React.js and Ant Design. Work closely with backend engineers to integrate APIs seamlessly into the application using GraphQL, ensuring efficient data flow and performance. Contribute to backend development using the Django framework, broadening my technical expertise and supporting a full-stack development approach.",
    skills: ["React", "FastAPI", "GraphQL", "AWS", "Gen AI"],
  },
  {
    Date: "February, 2024 - April, 2024",
    title: "TezIndia BuilderCamp 2.0",
    Company: "Tezos",
    location: "Remote",
    description:
      "Learnt and got exposed to Tezos Blockchain and building Dapps and smart contracts on it",
    skills: ["Python", "Next.js", "Smart contract", "NumPy"],
  },
  {
    Date: "September, 2023 - May, 2024",
    title: "Jr. Full Stack Developer",
    Company: "Alphabi Solutions",
    location: "Remote",
    description:
      "Contributed to the development and maintenance of an inventory system for a construction company Implemented user authentication for authorized access to head and site offices ",
    skills: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
  },
  {
    Date: "March, 2023 - August, 2023",
    title: "Software Engineering Intern",
    Company: "Alphabi Solutions",
    location: "Remote",
    description:
      "Collabrated and Contributed to cutting-edge applications for a leading Labsfranchisor. Spearheaded the Franchisor platform, enhancing operational efficiency by 20%.",
    skills: ["Next.js", "Prisma", "MongoDB", "Tailwind CSS"],
  },
  {
    Date: "2019 - 2023",
    title: "Bachelor of Engineering(B.E) - ISE",
    Company: "Dayanand Sagar College of Engineering",
    location: "Bengaluru, India",
    description: "Learnt core computer science subjects like DBMS,OS,Java",
  },
];

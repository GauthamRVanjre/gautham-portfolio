import gadaElectronics from "@/public/gada-electronics.png";
import eventConnect from "@/public/event-connect-home.png";
import getFit from "@/public/getFit-Home.jpeg";
import shadcn from "@/public/shadcn.png";
import thecrownSociety from "@/public/thecrownsocitey.png";
import ainftMinter from "@/public/ai_nft_dapp.png";

export const projectSectionContent = {
  kicker: "Projects",
  title: "What I've built",
};

export const projectList = [
  {
    id: 1,
    tag: "top",
    title: "The Crown Society",
    category: "Full Stack",
    image: thecrownSociety,
    description:
      "A project built for a freelance client. The site is used by 25+ active users daily and 70+ registered users",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      shadcn,
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    ],
    url: "https://www.thecrownsociety.in/",
    github: "https://github.com/GauthamRVanjre/crown-app",
    detailedDescription:
      "A project built for a freelance client. The site is used by 25+ active users daily and 70+ registered users",
    features: [
      " Searching and filtering users and investments",
      " Authentication",
      "Customer Data keeping store",
    ],
  },
  {
    id: 2,
    tag: "top",
    title: "Summarize GPT",
    category: "Full Stack",
    image: gadaElectronics,
    description:
      "In progress project. My aim is to summarize blogs for end user, when they paste the URL of the blog",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      shadcn,
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    ],
    github: "https://github.com/GauthamRVanjre/SummarizeGPT",
    detailedDescription:
      "My aim is to summarize blogs for end user, when they paste the URL of the blog",
    features: [
      "Payment Gateway integration",
      " Authentication",
      "Customer blog history",
    ],
  },
  {
    id: 3,
    tag: "top",
    title: "AI NFT Minting Dapp",
    category: "Full Stack",
    image: ainftMinter,
    description:
      "This AI NFT minting platform allows users to generate images through prompts to AI and mint them as NFTs",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    ],
    url: "https://ai-nft-minting-dapp.vercel.app/",
    github: "https://github.com/GauthamRVanjre/AI-NFT-Minting-dapp",
    detailedDescription:
      "This AI NFT minting platform allows users to generate images through prompts to AI and mint them as NFTs",
    features: ["Smart contract blockchain layer", "Hugging face integration"],
  },
  {
    id: 4,
    tag: "top",
    title: "Gada Electronics",
    category: "Full Stack",
    image: gadaElectronics,
    description:
      "An Electronics E-Commerce and inventory system. It is a system for an online electronics shop, giving seamless stock updates",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      shadcn,
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    ],
    url: "https://gada-electronics-murex.vercel.app/",
    github: "https://github.com/GauthamRVanjre/Gada-Electronics",
    detailedDescription:
      "It is a system for an online electronics shop, which gives seamless stock inventory updates. The system's automated inventory management ensures a seamless experience for real time updates ",
    features: [
      " Searching and filtering products",
      " Cart Functionality",
      " Authentication",
      "Inventory Management",
    ],
  },
  {
    id: 5,
    title: "Event Connect",
    category: "Frontend",
    image: eventConnect,
    description: "Event Hosting platform allowing users to create and host events",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    ],
    url: "https://event-connect.vercel.app/",
    github: "https://github.com/GauthamRVanjre/Event-Connect",
    detailedDescription:
      "Developed an innovative event hosting system, allowing users to create and manage groups by hosting events",
    features: [
      "Searching events and groups",
      "Authentication",
      "Creating groups and events",
      "RSVP functionality",
    ],
  },
  {
    id: 6,
    title: "Get Fit",
    category: "React Native",
    image: getFit,
    description: "A mobile application to help you in knowledge of Exercises",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    ],
    url: undefined,
    github: "https://github.com/GauthamRVanjre/GetFit",
    features: [
      "Seaching and Filtering",
      "Built with Cross-platform mobile Technology- React Native",
      "Utilizes StyleSheet for styling",
      "Integration With Rest APIs",
    ],
    detailedDescription:
      "Create a simple, easy-to-use mobile application to list excerises based on different body parts",
  },
];

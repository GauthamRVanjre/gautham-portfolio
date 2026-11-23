import gadaElectronics from "@/public/gada-electronics.png";
import eventConnect from "@/public/event-connect-home.png";
import getFit from "@/public/getFit-Home.jpeg";
import shadcn from "@/public/shadcn.png";
import thecrownSociety from "@/public/thecrownsocitey.png";
import ainftMinter from "@/public/ai_nft_dapp.png";
import docCare from "@/public/doc-care.png";
import brewHaven from "@/public/brew-haven.png";
import decentraFiverr from "@/public/decentrafiverr.png";

export const projectSectionContent = {
  kicker: "Projects",
  title: "What I've built",
};

export const projectList = [
  {
    id: 7,
    tag: "top",
    title: "Doc Care",
    category: "Full Stack AI",
    image: docCare,
    description:
      "A working full-stack voice AI demo that uses tool calling to check doctor availability, offer alternative slots, and save bookings in Supabase Postgres after explicit on-screen approval.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    ],
    url: "https://demo-care-clinic.vercel.app/",
    github: "https://github.com/GauthamRVanjre/doctor-appointment-booking",
    detailedDescription:
      "Built an agentic appointment booking workflow with Agora Conversational AI and Murf. Voice-driven tool calls handle doctor lookup, availability checks, and booking review. Live transcripts and appointment details support explicit on-screen approval before the server saves the booking in Supabase Postgres. Emergency handling stops the booking flow and directs users toward urgent help. Built with Next.js, React, and TypeScript, and deployed on Vercel.",
    features: [
      "Natural voice interaction with Agora and Murf.",
      "Tool-based doctor lookup and availability checks.",
      "Alternative slots when the requested time is unavailable.",
      "Live transcripts, appointment review, and explicit on-screen approval.",
      "Confirmed bookings persisted in Supabase Postgres.",
      "Emergency redirection that stops the booking flow.",
    ],
  },
  {
    id: 9,
    tag: "top",
    title: "DecentraFiverr",
    category: "Web3",
    image: decentraFiverr,
    description:
      "A freelance marketplace on Ethereum Sepolia with contract-held ETH escrow, IPFS deliverables, and client-approved payment release.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    url: "https://decentralized-fiverr-fawn.vercel.app/",
    github: "https://github.com/GauthamRVanjre/Decentralized-Fiverr",
    detailedDescription:
      "Built a Web3 freelance marketplace connecting a React and TypeScript interface to a Solidity escrow contract on Ethereum Sepolia. Clients create jobs and deposit test ETH into the contract, while freelancers submit deliverables through IPFS and Pinata. The job poster reviews the submission and approves payment release; the contract enforces caller and job-state checks before transferring funds. RainbowKit, wagmi, and viem handle wallet and contract interactions, with Chainlink providing USD-to-ETH conversion. This is a testnet demonstration with no dispute-resolution or refund workflow.",
    features: [
      "Wallet connection with RainbowKit on Ethereum Sepolia.",
      "Job creation with contract-held test ETH escrow.",
      "Requirements and deliverables stored through IPFS and Pinata.",
      "Client-approved payment release enforced by the smart contract.",
      "Job filtering by status and ETH amount.",
      "Chainlink ETH/USD price conversion.",
    ],
  },
  {
    id: 8,
    tag: "top",
    title: "Brew Haven · Coffee Dapp",
    category: "Web3",
    image: brewHaven,
    description:
      "A coffee-ordering dApp on Ethereum Sepolia with wallet connection, ETH payments, and an on-chain history of purchases.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg",
    ],
    url: "https://coffee-dapp-ten.vercel.app/",
    github: "https://github.com/GauthamRVanjre/Coffee-dapp",
    detailedDescription:
      "Built a coffee-ordering application with React and TypeScript, connecting a menu and shopping cart to a Solidity smart contract on Ethereum Sepolia. RainbowKit handles wallet connection, while wagmi and viem support contract reads and purchases. Each purchase forwards test ETH to the shop owner and records the buyer, items, amount, and timestamp on-chain. The Sippers page reads this history from the contract. This is a testnet demonstration, with no separate application backend.",
    features: [
      "Wallet connection with RainbowKit.",
      "Coffee menu and shopping cart.",
      "Purchases using Sepolia test ETH.",
      "Transaction confirmation and payment result pages.",
      "On-chain purchase history with buyer, items, amount, and timestamp.",
    ],
  },
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

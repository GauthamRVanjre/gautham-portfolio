import shadcn from "@/public/shadcn.png";
import cicd from "@/public/cicd.png";
import gadaElectronics from "@/public/gada-electronics.png";
import eventConnect from "@/public/event-connect-home.png";
import getFit from "@/public/getFit-Home.jpeg";
import reactQuery from "@/public/react-query.jpg";
import ReactNext from "@/public/reactNext.png";
import javascript from "@/public/javascript.jpg";
import thecrownSociety from "@/public/thecrownsocitey.png";
import ainftMinter from "@/public/ai_nft_dapp.png";

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
    // url: "https://www.thecrownsociety.in/",
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
    description:
      "Event Hosting platform allowing users to create and host events",
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
  {
    id: 7,
    title: "Homing Estate",
    category: "FullStack",
    image: cicd,
    description:
      "A dynamic real-estate marketplace with an intuitive user interface,",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    ],
    url: "https://gilded-pegasus-3e5c57.netlify.app/",
    github: "https://github.com/GauthamRVanjre/Home-estate-",
    features: ["Filtering on Buy or Rent", "Add To Favorites", "Sleek UI"],
    detailedDescription:
      "This project involves a dynamic real-estate marketplace featuring an intuitive user interface, enabling users to browse and explore a diverse range of houses with detailed information on each listing",
  },
];

//////////////////////////////

export const skills = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML5",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS3",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    name: "Java",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    name: "Redux",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
  },

  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    name: "Prisma",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    name: "Mongoose",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    name: "Express",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    name: "Mysql",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    name: "GitHub",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    name: "Vercel",
  },

  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "AWS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    name: "Firebase",
  },
];

///////
export const socials = [
  {
    name: "Github",
    url: "https://github.com/GauthamRVanjre",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gautham-r-vanjre-72b858228/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/vanjregautham1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  },
];

export const Testimonials = [
  {
    name: "name",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    description: "Description",
    designation: "Designation",
  },
  {
    name: "name",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    description: "Description",
    designation: "Designation",
  },
  {
    name: "name",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    description: "Description",
    designation: "Designation",
  },
];

export const Blogs = [
  {
    name: "Optimizing Data Fetching in React with React Query",
    image: reactQuery,
    description:
      "In the world of modern web development, efficient data management is crucial for creating fast, responsive, and scalable applications.",
    url: "https://gautham10.hashnode.dev/optimizing-data-fetching-in-react-with-react-query",
  },
  {
    name: "React vs Next.js: Client-Side and Server-Side Rendering",
    image: ReactNext,
    description:
      "In this,I will cover the major differences between React and Next.js, mainly their difference in data rendering",
    url: "https://gautham10.hashnode.dev/react-vs-nextjs-navigating-the-terrain-of-client-side-and-server-side-rendering",
  },
  {
    name: "Behind the Scenes: Understanding JavaScript Code Execution",
    image: javascript,
    description:
      "This article will reveal the mysteries and under the hood JavaScript code execution process.",
    url: "https://gautham10.hashnode.dev/behind-the-scenes-understanding-javascript-code-execution",
  },
  {
    name: "Exploring the Power of FlatList in React Native: Features, Use Cases and Implementation",
    image: reactQuery,
    description:
      "This article talks about using FlatList for rendering large lists in React Native",
    url: "https://gautham10.hashnode.dev/exploring-the-power-of-flatlist-in-react-native-features-use-cases-and-implementation",
  },
];

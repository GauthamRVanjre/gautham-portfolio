import filmflicker from "@/public/filmflicker.png";
import gitops from "@/public/gitops.webp";
import shadcn from "@/public/shadcn.png";
import cicd from "@/public/cicd.png";
import boto3 from "@/public/boto3.jpg";
import kubernetes from "@/public/kubernetes.png";
import selenium from "@/public/selenium.jpg";
import htmlcss from "@/public/htmlcss.webp";
import gadaElectronics from "@/public/gada-electronics.png";
import eventConnect from "@/public/event-connect-home.png";
import getFit from "@/public/getFit-Home.jpeg";
import reactQuery from "@/public/react-query.jpg";
import ReactNext from "@/public/reactNext.png";
import javascript from "@/public/javascript.jpg";

export const projectList = [
  {
    id: 1,
    tag: "top",
    title: "Gada Electronics",
    category: "Full Stack",
    image: gadaElectronics,
    description: "An Electronics E-Commerce and inventory system",
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
    id: 2,
    tag: "top",
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
    id: 3,
    tag: "top",
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
    id: 4,
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
  {
    id: 5,
    title: "GitOps Implementation",
    category: "devops",
    image: gitops,
    description: "Implemented GitOps on a Web app using Argo CD.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
    ],
    url: undefined,
    github: "#",
    features: [
      "GitOps implementation for managing infrastructure",
      "Usage of Argo CD for continuous delivery",
      "Integration with Kubernetes for container orchestration",
    ],
    detailedDescription:
      "This project implements GitOps methodology for managing infrastructure, specifically for a web application. It utilizes Argo CD for continuous delivery and integrates with Kubernetes for container orchestration.",
  },
  {
    id: 6,
    title: "Infrastructure Automation with IaC and AWS Boto3",
    category: "devops",
    image: boto3,
    description: " Automated repeated tasks in AWS cloud using AWS BOTO3.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/aws-boto-python",
    features: [
      "Automation of repetitive tasks in AWS cloud environment",
      "Usage of AWS Boto3 library for scripting in Python",
      "Improvement of operational efficiency in AWS environment",
    ],
    detailedDescription:
      "This project automates repetitive tasks in the AWS cloud environment using the AWS Boto3 library in Python. It enhances operational efficiency by scripting common tasks, such as provisioning resources and managing configurations.",
  },
  {
    id: 7,
    title: "Search Query Automation Using Selenium",
    category: "devops",
    image: selenium,
    description: "Automated Searching List of Search Strings on Google",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/browser-search-automation",
    features: ["Automated Search", "Support for all browsers."],
    detailedDescription:
      "This project automates searching keywords on search engine automatically with user authentication.",
  },
  {
    id: 8,
    tag: "top",
    title: "Microservice Deployment on K8s",
    category: "devops",
    image: kubernetes,
    description: "Deployed a 10-tier microservice app on kuberentes.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/K8s-cluster-bootstrap",
    features: [
      "Automated Kubernetes cluster provisioning and management using Kubeadm",
      "Integration with DigitalOcean for scalable infrastructure deployment",
      "Improvement of operational efficiency in Kubernetes cluster management",
    ],
    detailedDescription:
      "This project automates the provisioning and management of Kubernetes clusters using Kubeadm. It integrates with DigitalOcean for scalable infrastructure deployment and enhances operational efficiency in Kubernetes cluster management.",
  },
  {
    id: 9,
    title: "HTML Landing Pages",
    category: "frontend",
    image: htmlcss,
    description: "List of Static Pages made with html and vanilla css",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    ],
    url: undefined,
    github: "https://github.com/ankitrajxd/html-css-projects",
    features: ["Responsive"],
    detailedDescription:
      "Curated repository of HTML, CSS, and SCSS projects showcasing my web development journey.",
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

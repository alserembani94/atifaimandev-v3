import { getTool } from "./toolbelt";

const projects = [
  {
    name: "Glosawam",
    role: ["Full Stack Developer", "Project Manager"],
    description:
      "A public glossary for the crowd translation community for scientific and technology terms.",
    tenure: "Personal",
    dateStart: "2019-01-01",
    launchStatus: "Development",
    logoURL: "/vercel.svg",
    url: "https://glosawam.vercel.app/",
    stacks: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "Node.js",
      "AWS Amplify",
    ].map((item) => getTool(item)),
  },
  {
    name: "InfaqYIDE",
    role: ["Frontend Developer", "Project Manager"],
    description:
      "React Native app to allow donation to charity registered under Yayasan Islam Darul Ehsan.",
    tenure: "Company - toyyibPay Sdn. Bhd.",
    dateStart: "2019-01-01",
    launchStatus: "Launched",
    logoURL: "/logo/logo-infaqyide.webp",
    url: "https://infaq.yide.com.my/",
    stacks: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "Node.js",
      "AWS Amplify",
    ].map((item) => getTool(item)),
  },
  {
    name: "RosUI (previously known as NeoCorrad)",
    role: ["Frontend Developer", "Product Manager"],
    description: "An admin dashboard template made using VueJS.",
    tenure: "Company - toyyibPay Sdn. Bhd.",
    dateStart: "2019-01-01",
    launchStatus: "Launched",
    logoURL: "/logo/logo-neocorrad.webp",
    url: "https://www.neocorrad.io/",
    stacks: ["VueJS", "Typescript", "Tailwind CSS", "AWS"].map((item) =>
      getTool(item)
    ),
  },
  {
    name: "Jombuat - Maker Community",
    role: ["Full Stack Developer", "Co-founder"],
    description:
      "A community of makers and developers from Malaysia, Indonesia, Singapore and Brunei.",
    tenure: "Personal",
    dateStart: "2019-01-01",
    launchStatus: "Launched",
    logoURL: "/logo/logo-jombuat.webp",
    url: "https://www.jombuat.club/",
    stacks: ["Next.js", "Typescript", "Vercel", "SASS"].map((item) =>
      getTool(item)
    ),
  },
  {
    name: "Jomstores - An omnichannel e-commerce platform",
    role: ["React Native Developer"],
    description:
      "React Native app to allow omnichannel shopping experience, offline and online.",
    tenure: "Company - Qijang Technologies Sdn. Bhd.",
    dateStart: "2019-01-01",
    launchStatus: "Terminated",
    logoURL: "/logo/logo-jomstores.webp",
    url: "https://play.google.com/store/apps/details?id=com.o2o_app",
    stacks: ["React", "Node.js", "Ant Design"].map((item) => getTool(item)),
  },
  {
    name: "Silvi - An AI-assisted Budgeting App",
    role: ["Full Stack Developer", "Product Manager", "DevOps Engineer"],
    description:
      "React Native app to plan your budgeting and credit card management.",
    tenure: "Personal",
    dateStart: "2019-01-01",
    launchStatus: "Unknown",
    logoURL: "/logo/logo-aivi.webp",
    stacks: ["Next.js", "Typescript", "SASS", "Node.js", "AWS"].map((item) =>
      getTool(item)
    ),
  },
  {
    name: "Tahqeeq - Quran Authentication App",
    role: ["React Native Developer", "Full Stack Developer"],
    description:
      "React Native app to plan your budgeting and credit card management.",
    tenure: "Personal",
    dateStart: "2019-01-01",
    launchStatus: "Terminated",
    logoURL: "/logo/logo-tahqeeq.webp",
    stacks: ["React", "Ant Design", "Node.js", "Express"].map((item) =>
      getTool(item)
    ),
  },
];

export const getProjects = () => {
  return projects;
};

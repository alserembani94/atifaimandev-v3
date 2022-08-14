import { getTool } from "./toolbelt";

const career = [
  {
    company: "Xsolla",
    position: "Mid React Developer",
    url: "https://www.xsolla.com/",
    start: "May 2022",
    end: "Present",
    logo: "/logo/logo-xsolla.webp",
    description:
      "Develop high-end, pixel-perfect frontend components, while maintaining code qualities and CI/CD pipelines. Also working on web3 technologies such as Polygon and Solana.",
    stacks: [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "Tailwind CSS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
    ].map((item) => getTool(item)),
  },
  {
    company: "toyyibPay Sdn. Bhd.",
    position: "Application Developer",
    url: "https://toyyibpay.com/",
    start: "Aug 2021",
    end: "April 2022",
    logo: "/logo/logo-toyyibpay.webp",
    description:
      "Develop and maintain both legacy and new toyyibPay application. Also, work on toyyibPay's new features and improvements.",
    stacks: [
      "React",
      "Next.js",
      "VueJS",
      "NestJS",
      "Typescript",
      "Node.js",
      "Tailwind CSS",
      "AWS",
      "AWS Amplify",
      "Material UI",
    ].map((item) => getTool(item)),
  },
  {
    company: "Qijang Technologies Sdn. Bhd.",
    position: "Full Stack Developer",
    url: "https://www.qijang.com/",
    start: "Sept 2020",
    end: "July 2021",
    logo: "/logo/logo-qijang.webp",
    description:
      "An e-commerce plaform, integrating Lazada, Shopee and others for omnichannel shopping experience. I was also head of two projects, in which I hope it will be launched in future.",
    stacks: [
      "React",
      "Next.js",
      "Node.js",
      "AWS",
      "Vercel",
      "Tailwind CSS",
    ].map((item) => getTool(item)),
  },
  {
    company: "SPEZA (Sinophil Economic Zone Dax Management Sdn. Bhd.)",
    position: "Frontend Developer",
    url: "https://www.speza.com/",
    start: "Nov 2019",
    end: "March 2020",
    logo: "/logo/logo-speza.webp",
    description:
      "My first company, working on cryptocurrency trading platform. So excited for my first job!",
    stacks: ["React", "PostCSS"].map((item) => getTool(item)),
  },
  {
    company: "University of Malaya",
    position: "Research Assistant (Application Developer)",
    url: "https://www.um.edu.my/",
    start: "July 2018",
    end: "May 2019",
    logo: "/logo/logo-um.webp",
    description:
      "Developing an app Tahqeeq: Quran Authenticator - checking Quran authenticity. Using React Native ⚛.",
    stacks: ["React", "Ant Design"].map((item) => getTool(item)),
  },
  {
    company: "Aventz Management Sdn. Bhd.",
    position: "Intern (Motion & Graphic Designer)",
    url: "https://www.aventz.com.my/",
    start: "August 2016",
    end: "February 2017",
    logo: "/logo/logo-aventz.webp",
    description:
      "Working on motion designs and advertisement strategies, I create videos for ads and billboard. Well, my videos has been in billboards and televisions for football match! How cool is that?",
    stacks: [].map((item) => getTool(item)),
  },
];

export const getCareer = () => {
  return career;
};

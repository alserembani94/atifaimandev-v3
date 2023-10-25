import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGithub,
  SiTailwindcss,
  SiSass,
  SiVercel,
  SiVuedotjs,
  SiNuxtdotjs,
  SiPostcss,
  SiMui,
  SiAntdesign,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiApollographql,
  SiPrisma,
  SiNestjs,
  SiStrapi,
  SiJira,
  SiGitlab,
  SiFigma,
  SiAdobexd,
  SiAwsamplify,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
} from "react-icons/si";

export const enum Status {
  NOT_STARTED,
  ONGOING,
  HIATUS,
  ABORTED,
  ACQUIRED,
  IDLE,
}

export type Tool = {
  id: string,
  title: string;
  icon: React.ReactNode;
  brandColor: string;
  category: "frontend" | "backend" | "fullstack" | "tooling" | "styling" | "others";
  status: Status;
  note?: string;
  acquiredAt?: Date;
  className?: React.ComponentProps<'div'>['className'];
};

// Since the Date object requires `monthIndex` instead of `month`,
// I put everything with `-1`, so it is more verbose.
const tools: Tool[] = [
  {
    id: "react",
    title: "React",
    icon: <SiReact />,
    category: "frontend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
    className: "data-[tool=react]:hover:text-[#61dbfb] data-[tool=react]:hover:rotate-90"
  },
  {
    id: "react-native",
    title: "React Native",
    icon: <SiReact />,
    category: "frontend",
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: <SiNextdotjs />,
    category: "fullstack",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 8 - 1),
    className: "data-[tool=nextjs]:hover:text-black",
  },
  {
    id: "typescript",
    title: "Typescript",
    icon: <SiTypescript />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 9 - 1),
    className: "data-[tool=typescript]:hover:text-[#007acc]"
  },
  {
    id: "github",
    title: "Github",
    icon: <SiGithub />,
    category: "others",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 9 - 1),
    className: "data-[tool=github]:hover:text-black"
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "styling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 4 - 1),
    className: "data-[tool=tailwindcss]:hover:text-[#38BDF8] data-[tool=tailwindcss]:hover:rotate-180"
  },
  {
    id: "sass",
    title: "SASS",
    icon: <SiSass />,
    category: "styling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 9 - 1),
    className: "data-[tool=sass]:hover:text-[#CC6699]"
  },
  {
    id: "vercel",
    title: "Vercel",
    icon: <SiVercel />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 8 - 1),
    className: "data-[tool=vercel]:hover:text-black"
  },
  {
    id: "vuejs",
    title: "VueJS",
    icon: <SiVuedotjs />,
    category: "frontend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 8 - 1),
    className: "data-[tool=vuejs]:hover:text-[#41b883]"
  },
  {
    id: "nuxtjs",
    title: "Nuxt.js",
    icon: <SiNuxtdotjs />,
    category: "fullstack",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 9 - 1),
    className: "data-[tool=nuxtjs]:hover:text-[#41b883]"
  },
  {
    id: "postcss",
    title: "PostCSS",
    icon: <SiPostcss />,
    category: "styling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 9 - 1),
    className: "data-[tool=postcss]:hover:text-[#D23709]"
  },
  {
    id: "mui",
    title: "Material UI",
    icon: <SiMui />,
    category: "styling",
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2020, 11 - 1),
    className: "data-[tool=mui]:hover:text-[#0079F2]"
  },
  {
    id: "ant-design",
    title: "Ant Design",
    icon: <SiAntdesign />,
    category: "styling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 9 - 1),
    className: "data-[tool=ant-design]:hover:text-[#EB2E3F]"
  },
  {
    id: "nodejs",
    title: "Node.js",
    icon: <SiNodedotjs />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
    className: "data-[tool=nodejs]:hover:text-[#68A063]"
  },
  {
    id: "express",
    title: "Express",
    icon: <SiExpress />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
    className: "data-[tool=express]:hover:text-black"
  },
  {
    id: "mongodb",
    title: "MongoDB",
    icon: <SiMongodb />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2018, 8 - 1),
    className: "data-[tool=mongodb]:hover:text-[#589636]"
  },
  {
    id: "apollo-graphql",
    title: "Apollo GraphQL",
    icon: <SiApollographql />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2020, 11 - 1),
    className: "data-[tool=apollo-graphql]:hover:text-[#331D92] data-[tool=apollo-graphql]:hover:rotate-[360deg]"
  },
  {
    id: "prisma",
    title: "Prisma",
    icon: <SiPrisma />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 4 - 1),
    className: "data-[tool=prisma]:hover:text-[#0B334B]"
  },
  {
    id: "nestjs",
    title: "NestJS",
    icon: <SiNestjs />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 11 - 1),
    className: "data-[tool=nestjs]:hover:text-[#D5214A]"
  },
  {
    id: "strapi",
    title: "Strapi",
    icon: <SiStrapi />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 6 - 1),
    className: "data-[tool=strapi]:hover:text-[#8E75FF]"
  },
  {
    id: "jira",
    title: "Jira",
    icon: <SiJira />,
    category: "others",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 9 - 1),
    className: "data-[tool=jira]:hover:text-[#247DF2]"
  },
  {
    id: "gitlab",
    title: "Gitlab",
    icon: <SiGitlab />,
    category: "others",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 9 - 1),
    className: "data-[tool=gitlab]:hover:text-[#D74027]"
  },
  {
    id: "figma",
    title: "Figma",
    icon: <SiFigma />,
    category: "others",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 11 - 1),
    className: "data-[tool=figma]:hover:text-[#9A54F2]"
  },
  {
    id: "adobe-xd",
    title: "Adobe XD",
    icon: <SiAdobexd />,
    category: "others",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 9 - 1),
    className: "data-[tool=adobe-xd]:hover:text-[#430134]"
  },
  {
    id: "aws-amplify",
    title: "AWS Amplify",
    icon: <SiAwsamplify />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 12 - 1),
    className: "data-[tool=aws-amplify]:hover:text-[#F19100]"
  },
  {
    id: "aws",
    title: "AWS",
    icon: <SiAmazonaws />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 11 - 1),
    className: "data-[tool=aws]:hover:text-[#FF9900]"
  },
  {
    id: "docker",
    title: "Docker",
    icon: <SiDocker />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 7 - 1),
    className: "data-[tool=docker]:hover:text-[#0db7ed]"
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    icon: <SiKubernetes />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2022, 7 - 1),
    className: "data-[tool=kubernetes]:hover:text-[#326ce5]"
  },
  {
    id: "google-cloud",
    title: "Google Cloud",
    icon: <SiGooglecloud />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
    className: "data-[tool=google-cloud]:hover:text-transparent data-[tool=google-cloud]:hover:bg-clip-text data-[tool=google-cloud]:hover:bg-gradient-to-r data-[tool=google-cloud]:hover:from-[#4285F4] data-[tool=google-cloud]:hover:to-[#34A853]"
  },
];

type Stack =
  | "frontend"
  | "styling"
  | "backend"
  | "others"
  | "common"
  | "portfolio"
  | null;

type GetToolbelt = (props: {
  stack?: Stack;
  filters?: string[];
  filterOptions?: {
    status: Status[];
  };
}) => Tool[];

export const getTool = (item: string) => {
  return tools.find((tool) => tool.title.toLowerCase() === item.toLowerCase());
};

export const getToolbelt: GetToolbelt = (props) => {
  if (!props?.stack && !props?.filters && !props?.filterOptions) {
    return tools;
  }

  if (props.filterOptions) {
    return tools.filter((tool) => {
      if (props.filterOptions?.status) {
        return props.filterOptions.status.includes(tool.status);
      }

      return false;
    });
  }

  const toBeFiltered = props.filters || [];
  switch (props.stack) {
    case "common":
      Array.prototype.push.apply(toBeFiltered, [
        "React",
        "Next.js",
        "Typescript",
        "Github",
        "Tailwind CSS",
        "Vercel",
      ]);
      break;
    case "frontend":
      Array.prototype.push.apply(toBeFiltered, [
        "React",
        "Typescript",
        "Next.js",
        "VueJS",
        "Nuxt.js",
      ]);
      break;
    case "backend":
      Array.prototype.push.apply(toBeFiltered, [
        "Node.js",
        "Express",
        "MongoDB",
        "Apollo GraphQL",
        "Prisma",
        "NestJS",
        "Strapi",
      ]);
      break;
    case "styling":
      Array.prototype.push.apply(toBeFiltered, [
        "Tailwind CSS",
        "SASS",
        "PostCSS",
        "Material UI",
        "Ant Design",
      ]);
      break;
    case "others":
      Array.prototype.push.apply(toBeFiltered, [
        "Github",
        "Jira",
        "Gitlab",
        "Vercel",
        "Figma",
        "Adobe XD",
        "AWS Amplify",
        "AWS",
        "Docker",
        "Kubernetes",
        "Google Cloud",
      ]);
      break;
    case "portfolio":
      Array.prototype.push.apply(toBeFiltered, [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Vercel",
      ]);
      break;
    default:
      break;
  }

  const cleanupToBeFiltered = [...new Set(toBeFiltered)];

  const theTools = cleanupToBeFiltered.map((item) => getTool(item));
  return theTools.filter(
    (tool) => tool && [Status.ACQUIRED, Status.IDLE].includes(tool.status)
  ) as Tool[];
};

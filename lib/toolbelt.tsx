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
  SiMaterialui,
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
  title: string;
  icon: React.ReactNode;
  brandColor: string;
  status: Status;
  note?: string;
  acquiredAt?: Date;
  [key: string]: any;
};

// Since the Date object requires `monthIndex` instead of `month`,
// I put everything with `-1`, so it is more verbose.
const tools: Tool[] = [
  {
    title: "React",
    icon: <SiReact />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    title: "React Native",
    icon: <SiReact />,
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 8 - 1),
  },
  {
    title: "Typescript",
    icon: <SiTypescript />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 9 - 1),
  },
  {
    title: "Github",
    icon: <SiGithub />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 9 - 1),
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 4 - 1),
  },
  {
    title: "SASS",
    icon: <SiSass />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 9 - 1),
  },
  {
    title: "Vercel",
    icon: <SiVercel />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 8 - 1),
  },
  {
    title: "VueJS",
    icon: <SiVuedotjs />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 8 - 1),
  },
  {
    title: "Nuxt.js",
    icon: <SiNuxtdotjs />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 9 - 1),
  },
  {
    title: "PostCSS",
    icon: <SiPostcss />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 9 - 1),
  },
  {
    title: "Material UI",
    icon: <SiMaterialui />,
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2020, 11 - 1),
  },
  {
    title: "Ant Design",
    icon: <SiAntdesign />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 9 - 1),
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    title: "Express",
    icon: <SiExpress />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    title: "Apollo GraphQL",
    icon: <SiApollographql />,
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2020, 11 - 1),
  },
  {
    title: "Prisma",
    icon: <SiPrisma />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 4 - 1),
  },
  {
    title: "NestJS",
    icon: <SiNestjs />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 11 - 1),
  },
  {
    title: "Strapi",
    icon: <SiStrapi />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 6 - 1),
  },
  {
    title: "Jira",
    icon: <SiJira />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 9 - 1),
  },
  {
    title: "Gitlab",
    icon: <SiGitlab />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 9 - 1),
  },
  {
    title: "Figma",
    icon: <SiFigma />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 11 - 1),
  },
  {
    title: "Adobe XD",
    icon: <SiAdobexd />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 9 - 1),
  },
  {
    title: "AWS Amplify",
    icon: <SiAwsamplify />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 12 - 1),
  },
  {
    title: "AWS",
    icon: <SiAmazonaws />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 11 - 1),
  },
  {
    title: "Docker",
    icon: <SiDocker />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 7 - 1),
  },
  {
    title: "Kubernetes",
    icon: <SiKubernetes />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2022, 7 - 1),
  },
  {
    title: "Google Cloud",
    icon: <SiGooglecloud />,
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
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

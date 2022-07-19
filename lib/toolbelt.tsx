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
} from 'react-icons/si';

export const getToolbelt = () => (['React', 'Next.js', 'Typescript', 'Github', 'Tailwind CSS', 'Vercel'].map(item => getTools(item)));

export const getPortfolioStack = () => (['Next.js', 'Typescript', 'Tailwind CSS', 'Vercel'].map(item => getTools(item)));

export const getFrontendStack = () => (['React', 'Typescript', 'Next.js', 'VueJS', 'Nuxt.js'].map(item => getTools(item)));

export const getStylingStack = () => (['Tailwind CSS', 'SASS', 'PostCSS', 'Material UI', 'Ant Design'].map(item => getTools(item)));

export const getBackendStack = () => (['Node.js', 'Express', 'MongoDB', 'Apollo GraphQL', 'Prisma', 'NestJS', 'Strapi'].map(item => getTools(item)));

export const getOtherStack = () => (['Github', 'Jira', 'Gitlab', 'Vercel', 'Figma', 'Adobe XD', 'AWS Amplify', 'AWS', 'Docker', 'Kubernetes'].map(item => getTools(item)));

export const getTools = (tool: string) => {
  switch(tool) {
    case 'React':
      return ({
        title: 'React',
        icon: <SiReact />,
      });
    case 'Next.js':
      return ({
        title: 'Next.js',
        icon: <SiNextdotjs />,
      });
    case 'Typescript':
      return ({
        title: 'Typescript',
        icon: <SiTypescript />,
      });
    case 'Github':
      return ({
        title: 'Github',
        icon: <SiGithub />,
      });
    case 'Tailwind CSS':
      return ({
        title: 'Tailwind CSS',
        icon: <SiTailwindcss />,
      });
    case 'SASS':
      return ({
        title: 'SASS',
        icon: <SiSass />,
      });
    case 'Vercel':
      return ({
        title: 'Vercel',
        icon: <SiVercel />,
      });
    case 'VueJS':
      return ({
        title: 'VueJS',
        icon: <SiVuedotjs />,
      });
    case 'Nuxt.js':
      return ({
        title: 'Nuxt.js',
        icon: <SiNuxtdotjs />,
      });
    case 'PostCSS':
      return ({
        title: 'PostCSS',
        icon: <SiPostcss />,
      });
    case 'Material UI':
      return ({
        title: 'Material UI',
        icon: <SiMaterialui />,
      });
    case 'Ant Design':
      return ({
        title: 'Ant Design',
        icon: <SiAntdesign />,
      });
    case 'Node.js':
      return ({
        title: 'Node.js',
        icon: <SiNodedotjs />,
      });
    case 'Express':
      return ({
        title: 'Express',
        icon: <SiExpress />,
      });
    case 'MongoDB':
      return ({
        title: 'MongoDB',
        icon: <SiMongodb />,
      });
    case 'Apollo GraphQL':
      return ({
        title: 'Apollo GraphQL',
        icon: <SiApollographql />,
      });
    case 'Prisma':
      return ({
        title: 'Prisma',
        icon: <SiPrisma />,
      });
    case 'NestJS':
      return ({
        title: 'NestJS',
        icon: <SiNestjs />,
      });
    case 'Strapi':
      return ({
        title: 'Strapi',
        icon: <SiStrapi />,
      });
    case 'Jira':
      return ({
        title: 'Jira',
        icon: <SiJira />,
      });
    case 'Gitlab':
      return ({
        title: 'Gitlab',
        icon: <SiGitlab />,
      });
    case 'Figma':
      return ({
        title: 'Figma',
        icon: <SiFigma />,
      });
    case 'Adobe XD':
      return ({
        title: 'Adobe XD',
        icon: <SiAdobexd />,
      });
    case 'AWS Amplify':
      return ({
        title: 'AWS Amplify',
        icon: <SiAwsamplify />,
      });
    case 'AWS':
      return ({
        title: 'AWS',
        icon: <SiAmazonaws />,
      });
    case 'Docker':
      return ({
        title: 'Docker',
        icon: <SiDocker />,
      });
    case 'Kubernetes':
      return ({
        title: 'Kubernetes',
        icon: <SiKubernetes />,
      });
    default:
      return ({
        title: '',
        icon: <SiReact />,
      });
  }
}

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGithub,
  SiTailwindcss,
  SiSass,
  SiVercel,
} from 'react-icons/si';

export const getToolbelt = () => {
  return [
    {
      title: 'React',
      icon: <SiReact />,
    },
    {
      title: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      title: 'Typescript',
      icon: <SiTypescript />,
    },
    {
      title: 'Github',
      icon: <SiGithub />,
    },
    {
      title: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      title: 'Sass',
      icon: <SiSass />,
    },
    {
      title: 'Vercel',
      icon: <SiVercel />,
    },
  ];
}
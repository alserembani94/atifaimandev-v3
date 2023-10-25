import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiX,
} from 'react-icons/si';

export const getCta = () => {
  const cta = [
    {
      title: 'Email',
      href: 'mailto:alserembani94@gmail.com',
      icon: <SiGmail />,
    },
    {
      title: 'Github',
      href: 'https://github.com/alserembani94',
      icon: <SiGithub />,
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/atif-aiman/',
      icon: <SiLinkedin />,
    },
    {
      title: 'Twitter / X',
      href: 'https://twitter.com/alserembani',
      icon: <SiX />,
    },
  ];

  return cta;
}
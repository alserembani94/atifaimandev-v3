import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiTwitter,
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
      title: 'Twitter',
      href: 'https://twitter.com/alserembani',
      icon: <SiTwitter />,
    },
  ];

  return cta;
}
import { useLottie } from 'lottie-react';
import {
  NextPage,
  GetStaticProps,
} from 'next';
import Default from '../components/layout/Default';
import { getProjects } from '../lib/projects';
import Image from 'next/image';
import { IconContext } from 'react-icons';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
    }
  };
};

const Projects: NextPage = () => {
  const projects = getProjects();
  const style = {
    height: 300,
  };

  const options = {
    animationData: require('/animation/present.json'),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return (
    <Default>
      { View }
      <h1 className="text-center mb-8">Projects</h1>
      <div className="flex flex-col gap-12 text-center">
        {
          projects.map((project) => (
            <div key={project.name} className="flex flex-col items-center gap-2">
              <div className="relative w-48 h-20">
                <Image src={project.logoURL} alt={project.name} layout="fill" className="relative w-16 h-16" objectFit='contain' />
              </div>
              <h2 className="text-2xl">{project.name}</h2>
              <p>Status: {project.launchStatus}</p>
              {/* <p>Role: {new Intl.ListFormat('en').format(project.role)}</p> */}
              <p>Role: {project.role.join(', ')}</p>
              <p className="text-lg">{project.description}</p>
              <div className="flex flex-row flex-wrap gap-4">
                {
                  project.stacks.map((tool) => (
                    <IconContext.Provider value={{ className: "w-8 h-8 text-slate-500" }} key={project.name + tool.title}>
                      {tool.icon}
                    </IconContext.Provider>
                  ))
                }
              </div>
              <hr className="w-full mt-4" />
            </div>
          ))
        }
      </div>
    </Default>
  );
};

export default Projects;

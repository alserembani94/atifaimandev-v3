import { getToolbelt } from "../../lib/toolbelt";

const Stacks: React.FC = () => {
  const [frontendStack, stylingStack, backendStack, otherStack] = [
    getToolbelt({ stack: "frontend" }),
    getToolbelt({ stack: "styling" }),
    getToolbelt({ stack: "backend" }),
    getToolbelt({ stack: "others" }),
  ];

  return (
    <div>
      <h2 className="my-4">Curious of my stack?</h2>
      <div>
        <h3>Front End Stack</h3>
        <div className="flex flex-row flex-wrap gap-4 my-4">
          {frontendStack.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-4 w-[8ch] h-[8ch] text-center"
            >
              <div
                className={`
                    flex
                    items-center
                    justify-center
                    text-4xl
                    mb-3
                    hover:scale-125
                    transition-all
                    duration-200
                    ease-in-out
                    text-zinc-500
                    ${
                      stack.title === "React" &&
                      "hover:text-[#61dbfb] hover:rotate-90"
                    }
                    ${stack.title === "Typescript" && "hover:text-[#007acc]"}
                    ${stack.title === "Next.js" && "hover:text-black"}
                    ${
                      stack.title === "VueJS" &&
                      "hover:text-[#41B883] hover:-scale-x-125"
                    }
                    ${stack.title === "Nuxt.js" && "hover:text-[#41b883]"}
                  `}
              >
                {stack.icon}
              </div>
              <div className="text-center">{stack.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Styling Stack</h3>
        <div className="flex flex-row flex-wrap gap-4 my-4">
          {stylingStack.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-4 w-[8ch] h-[8ch] text-center"
            >
              <div
                className={`
                    flex
                    items-center
                    justify-center
                    text-4xl
                    mb-3
                    hover:scale-125
                    transition-all
                    duration-200
                    ease-in-out
                    text-zinc-500
                    ${
                      stack.title === "Tailwind CSS" &&
                      "hover:text-[#38BDF8] hover:rotate-180"
                    }
                    ${stack.title === "SASS" && "hover:text-[#CC6699]"}
                    ${stack.title === "PostCSS" && "hover:text-[#D23709]"}
                    ${stack.title === "Material UI" && "hover:text-[#0079F2]"}
                    ${stack.title === "Ant Design" && "hover:text-[#EB2E3F]"}
                  `}
              >
                {stack.icon}
              </div>
              <div className="text-center">{stack.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Back End Stack</h3>
        <div className="flex flex-row flex-wrap gap-4 my-4">
          {backendStack.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-4 w-[8ch] h-[8ch] text-center"
            >
              <div
                className={`
                    flex
                    items-center
                    justify-center
                    text-4xl
                    mb-3
                    hover:scale-125
                    transition-all
                    duration-200
                    ease-in-out
                    text-zinc-500
                    ${stack.title === "Node.js" && "hover:text-[#68A063]"}
                    ${stack.title === "Express" && "hover:text-black"}
                    ${stack.title === "MongoDB" && "hover:text-[#589636]"}
                    ${
                      stack.title === "Apollo GraphQL" &&
                      "hover:text-[#331D92] hover:rotate-[360deg]"
                    }
                    ${stack.title === "Prisma" && "hover:text-[#0B334B]"}
                    ${stack.title === "NestJS" && "hover:text-[#D5214A]"}
                    ${stack.title === "Strapi" && "hover:text-[#8E75FF]"}
                    `}
              >
                {stack.icon}
              </div>
              <div className="text-center">{stack.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Other Stack</h3>
        <div className="flex flex-row flex-wrap gap-4 my-4">
          {otherStack.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-4 w-[8ch] h-[8ch] text-center"
            >
              <div
                className={`
                    flex
                    items-center
                    justify-center
                    text-4xl
                    mb-3
                    hover:scale-125
                    transition-all
                    duration-200
                    ease-in-out
                    text-zinc-500
                    ${stack.title === "Github" && "hover:text-black"}
                    ${stack.title === "Gitlab" && "hover:text-[#D74027]"}
                    ${stack.title === "Jira" && "hover:text-[#247DF2]"}
                    ${stack.title === "Vercel" && "hover:text-black"}
                    ${stack.title === "Figma" && "hover:text-[#9A54F2]"}
                    ${stack.title === "Adobe XD" && "hover:text-[#430134]"}
                    ${stack.title === "AWS Amplify" && "hover:text-[#F19100]"}
                    ${stack.title === "AWS" && "hover:text-[#F19100]"}
                    ${stack.title === "Docker" && "hover:text-[#0db7ed]"}
                    ${stack.title === "Kubernetes" && "hover:text-[#326ce5]"}
                    ${
                      stack.title === "Google Cloud" &&
                      "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#4285F4] to-[#34A853]"
                    }
                    `}
              >
                {stack.icon}
              </div>
              <div className="text-center">{stack.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;

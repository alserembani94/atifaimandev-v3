import { useLottie } from "lottie-react";
import { GetStaticProps, NextPage } from "next";
import { IconContext } from "react-icons";
import Default from "../components/layout/Default";
import Timeline from "../components/sections/timeline";
import { getToolbelt } from "../lib/toolbelt";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

const Index: NextPage = () => {
  const toolbelt = getToolbelt({
    stack: "common",
  });

  const style = {
    height: 300,
  };

  const options = {
    animationData: require("/animation/dev-person.json"),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return (
    <Default title="The Home of atifaiman.dev">
      {View}
      <div className="text-center my-8">
        <h4>Salam and hello everyone!</h4>
        <h1>
          My name is{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Atif Aiman
          </span>
        </h1>
        <h4>
          and I am a{" "}
          <span className="px-2 py-1 bg-indigo-800 overflow-hidden text-white rounded">
            pixel-perfect frontend developer ✨
          </span>
        </h4>
        <div className="border border-zinc-200 rounded px-2 py-4 my-12">
          <h4>My go-to toolbelt</h4>
          <div className="flex flex-row flex-wrap items-center justify-center my-8 text-zinc-500 gap-8">
            {toolbelt.map((tool) => (
              <div
                key={tool.title}
                className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out"
              >
                <IconContext.Provider
                  value={{
                    className: `
                        w-8
                        h-8
                        transition-all
                        duration-300
                        ease-in-out
                        ${
                          tool.title === "React" &&
                          "hover:rotate-90 hover:scale-125 hover:text-[#61dbfb]"
                        }
                        ${
                          tool.title === "Next.js" &&
                          "hover:scale-125 hover:text-black"
                        }
                        ${
                          tool.title === "Typescript" &&
                          "hover:scale-125 hover:text-[#007acc]"
                        }
                        ${
                          tool.title === "Github" &&
                          "hover:scale-125 hover:text-black"
                        }
                        ${
                          tool.title === "Tailwind CSS" &&
                          "hover:rotate-180 hover:scale-125 hover:text-[#38BDF8]"
                        }
                        ${
                          tool.title === "Sass" &&
                          "hover:scale-125 hover:text-[#CC6699] "
                        }
                        ${
                          tool.title === "Vercel" &&
                          "hover:scale-125 hover:text-black"
                        }
                      `,
                  }}
                >
                  {tool.icon}
                </IconContext.Provider>
                <h6>{tool.title}</h6>
              </div>
            ))}
          </div>
        </div>

        <Timeline />
      </div>
    </Default>
  );
};

export default Index;

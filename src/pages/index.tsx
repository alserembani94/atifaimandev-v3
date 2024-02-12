import { useLottie } from "lottie-react";
import { GetStaticProps, NextPage } from "next";
import Default from "@/components/layout/Default";
import Timeline from "@/components/sections/timeline";
import { getToolbelt } from "@/lib/toolbelt";
import { twMerge } from "@/lib/helpers";
import { MouseEventHandler, useEffect } from "react";
import axios from "axios";

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
    animationData: require("@/animation/dev-person.json"),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  useEffect(() => {
    console.log(
      "%cDid you just peak into the console? 👀",
      "background: #222; color: #bada55"
    );

    console.log("%c Don't worry, I got ya! ", "background: #bada55; color: #222");
    console.log(
      "%c Listen to my jam music! \n https://www.youtube.com/watch?v=xvFZjo5PgG0 ",
      "background: #bada55; color: #222"
    );
  }, []);

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
                <div
                  data-tool={tool.id}
                  className={twMerge(
                    "flex items-center justify-center text-4xl mb-3 hover:scale-125 transition-all duration-200 ease-in-out text-zinc-500",
                    tool.className
                  )}
                >
                  {tool.icon}
                </div>
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

import { useLottie } from "lottie-react";
import { NextPage, GetStaticProps } from "next";
import Default from "@/components/layout/Default";
import { MdOpenInNew } from "react-icons/md";
import Stacks from "@/components/sections/stacks";
import Career from "@/components/sections/career";
import Image from "next/image";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

const About: NextPage = ({}) => {
  useEffect(() => {
    console.log(
      "%cDid you just peak into the console? 👀",
      "background: #222; color: #bada55"
    );
  }, []);

  const style = {
    height: 300,
  };

  const options = {
    animationData: require("@/animation/study.json"),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return (
    <Default title="About Me">
      {View}

      <div className="text-center flex flex-col items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/41750858"
          alt="Atif Aiman in a golden Baju Melayu"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1>My name is Atif Aiman,</h1>
        <h3>And this is about me!</h3>
      </div>

      <div className="my-8">
        <p>
          I am a frontend developer enthusiast, and love to deliver a
          pixel-perfect creation. Well, I hereby declare that I am proficient in
          CSS. Not just that, I am in love (and still) in React, and have been
          into it since 2018.
          <br />
          <br />
          And so, I start to develop this very portfolio as my canvas, to
          showcase my styling skills. My curiosity is always on, and I am always
          looking for new challenges to solve. The accessibilities,
          internationalization, and performance are in my bucket list.
          <br />
          <br />
          I also love to share my knowledge, and occasionally write articles.
          Well, initially I just want to record my process of learning, and end
          up discovered that I love to teach. One day, I hope I have my own
          course so anyone can benefit from it as well.
          <br />
          <br />
          By the way, my portfolio is open-source, so you are welcome to{" "}
          <a
            href="https://github.com/alserembani94/atifaimandev-v3"
            className="text-blue-500 hover:text-blue-800 underline inline-flex items-center"
            rel="noopener noreferrer"
            target="_blank"
          >
            check it out
            <MdOpenInNew />
          </a>
          .
          <br />
          <br />
          So, welcome to my exploration of the world of frontend development 🚀.
        </p>
      </div>

      <Stacks />
      <Career />
    </Default>
  );
};

export default About;

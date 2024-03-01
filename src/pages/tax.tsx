import { useLottie } from "lottie-react";
import { GetStaticProps, NextPage } from "next";
import Default from "@/components/layout/Default";
import { useEffect } from "react";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

const Index: NextPage = () => {

  const style = {
    height: 300,
  };

  const options = {
    animationData: require("@/animation/tax.json"),
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
      <form className="text-center my-8 flex flex-col gap-4">
        <h1>Tax Calculator</h1>
        <h6>Choose the year first</h6>

        <select className="p-4 rounded">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>

        <Link className="p-4 rounded bg-blue-800 text-white" href="/tax/calculate">Calculate</Link>
      </form>
    </Default>
  );
};

export default Index;

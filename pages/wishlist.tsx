import { useLottie } from "lottie-react";
import { NextPage, GetStaticProps } from "next";
import Default from "../components/layout/Default";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

const Wishlist: NextPage = () => {
  console.log(
    "%cDid you just peak into the console? 👀",
    "background: #222; color: #bada55"
  );

  const style = {
    height: 300,
  };

  const options = {
    animationData: require("/animation/checklist.json"),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return (
    <Default title="My Wishlist">
      {View}
      <div className="text-center my-8">
        <h1>My Wishlist</h1>
        <p>Will add this page (real soon!)</p>
      </div>
    </Default>
  );
};

export default Wishlist;

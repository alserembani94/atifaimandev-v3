import { useLottie } from "lottie-react";
import { NextPage } from "next";
import Default from "../components/layout/Default";
import { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

const Eid: NextPage = ({}) => {
  const style = {
    height: 300,
  };

  const options = {
    animationData: require("../animation/eid-mubarak.json"),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  useEffect(() => {
    console.log("%cEid Mubarak! 🌙🎉", "background: #222; color: #bada55");
  }, []);

  return (
    <Default
      title="Selamat Hari Raya!"
      description="Ucapan Hari Raya dari Atif Aiman"
    >
      {View}
      <div className="flex flex-col items-center text-center">
        <h1>Eid Mubarak everyone!</h1>
        <h3>Selamat Hari Raya Aidilfitri</h3>

        <p className="text-center py-8">
          Congratulations to you (if you are a muslim) for completing this
          year&apos;s challenge, as a form of obedience and blessings.
          <br />
          As we celebrate this festive season, let us not forget the true
          meaning of Eid, which is to be grateful for the blessings that we have
          received.
          <br />
          <br />
          May this Eid bring joy, happiness, peace and prosperity to you and
          your family.
          <br />
          <br />
          For those who are not celebrating, I hope you have a great day ahead!
          <br />
          <br />
          If I have done anything wrong to you, I sincerely apologize for my
          mistakes. Let us forgive and forget, and start anew. 🙏🏼
        </p>

        <h6>Anyway!</h6>
        <br />
        <p>
          Numbers (especially duit raya) may seem scary at first,
          <br />
          but with celebrating raya, you might need to see in a different
          perspective,
          <br />
          and you will find peace.
          <br />
          <br />
          If you are ready, let&apos;s look into the image!
        </p>

        <a
          href="/images/scary_number.png"
          className="px-6 py-4 bg-orange-400 text-white font-bold my-4 rounded-md"
        >
          Show me the image
        </a>
      </div>
    </Default>
  );
};

export default Eid;

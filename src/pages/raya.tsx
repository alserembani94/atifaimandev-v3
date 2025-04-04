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
        <br />
        <p>Numbers (especially duit raya) may seem scary at first,</p>
        <p>
          but with celebrating raya, you might need to see in a different
          perspective,
        </p>
        <p>and you will find peace.</p>
        <br />
        <p>If you are ready, let&apos;s look into the image!</p>

        <a
          href="/images/scary_number.png"
          className="px-6 py-2 bg-orange-400 text-white font-bold my-2 rounded-md"
        >
          Show me the image
        </a>
      </div>
    </Default>
  );
};

export default Eid;

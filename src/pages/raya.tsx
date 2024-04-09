import { useLottie } from "lottie-react";
import { NextPage } from "next";
import Default from "../components/layout/Default";
import { useEffect } from "react";
import {QRCodeSVG} from 'qrcode.react';

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
    console.log(
      "%cEid Mubarak! 🌙🎉",
      "background: #222; color: #bada55"
    );
  }, []);


  return (
    <Default title="Selamat Hari Raya!" description="Ucapan Hari Raya dari Atif Aiman">
      {View}
      <div className="flex flex-col items-center text-center">
        <h1>Eid Mubarak everyone!</h1>
        <h3>Selamat Hari Raya Aidilfitri</h3>

        <p className="text-center py-8">
          Congratulations to you (if you are a muslim) for completing this year&apos;s challenge, as a form of obedience and blessings.
          <br />
          As we celebrate this festive season, let us not forget the true meaning of Eid, which is to be grateful for the blessings that we have received.
          <br />
          <br />
          May this Eid bring joy, happiness, peace and prosperity to you and your family.
          <br />
          <br />
          For those who are not celebrating, I hope you have a great day ahead!

          <br />
          <br />

          If I have done anything wrong to you, I sincerely apologize for my mistakes. Let us forgive and forget, and start anew. 🙏🏼
        </p>

        <h6>Anyway!</h6>

        <p className="text-center py-8">
          As a form of celebration, I have prepared a little surprise for you. Scroll more to find out!

          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://i.redd.it/xnnvfkvcde951.jpg" alt="Eid Mubarak" className="rounded-lg w-96" />

        <p className="text-center py-8">
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          ...
          <br />
          <br />
          Just kidding! 😂
          <br />
          I am truly sorry if I have made you scroll this far for nothing. 😅
          <br />
        </p>

        <h5>Now, for real!</h5>

        <p className="text-center py-8">
          I have prepared a little surprise for you. Scan the QR code below!
        </p>

        {/* Make this div blur whatever content inside */}
        <div className="filter blur-lg">
          <QRCodeSVG
            level="H"
            size={300}
            fgColor="#800000"
            imageSettings={{
              src: "./logo/logo-atif.png",
              height: 64,
              width: 122,
              excavate: true,
            }}
            value="https://onelink.tngd.my/8mmV/MONEYPACKET?p=1e5022dcbfd37889014ba92a51b338f36d96ccb277afd6a8d9c3d3aa4eada96f98f36c946f89684a199c8b10c0d32752b2102ec45fbd0722f0abeaf4094421d563f7c812cf8f9ea7c261a6b52c9935c1"
          />
        </div>

        <h4>Sorry, all packets have been claimed 😢</h4>
        <h5 className="mt-8">Have a good day ahead!</h5>
      </div>

    </Default>
  );
};

export default Eid;

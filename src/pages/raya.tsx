import { useLottie } from "lottie-react";
import { NextPage } from "next";
import Default from "../components/layout/Default";
import { useEffect, useState } from "react";

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

  // State that reads from local storage to track if user clicks the button
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const clicked = localStorage.getItem("clicked");
    if (clicked) {
      setClicked(true);
    }
  }, []);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    localStorage.setItem("clicked", "true");
    // open new tab
    window.open("https://kena.lol", "_blank");
  };

  const handleForReal = () => {
    window.open("https://atifaiman.dev/raya/for_real", "_blank");
  };

  return (
    <Default
      title="Selamat Hari Raya!"
      description="Ucapan Hari Raya dari Atif Aiman"
    >
      {View}
      <div className="flex flex-col items-center text-center">
        <h1>Eid Mubarak everyone!</h1>
        <h3>Selamat Hari Raya Aidilfitri</h3>
        <p>
          Sorry, but to prevent bots from X (previously Twitter), I had to do it
          this way.
        </p>
        {!clicked && (
          <button
            onClick={handleClick}
            className="px-8 py-4 rounded bg-orange-400 text-white my-4 font-bold"
          >
            Let&apos;s get duit raya!
          </button>
        )}

        {clicked && (
          <button
            className="px-8 py-4 rounded bg-orange-400 text-white my-4 font-bold"
            onClick={handleForReal}
          >
            Kidding, this one is fr
          </button>
        )}
      </div>
    </Default>
  );
};

export default Eid;

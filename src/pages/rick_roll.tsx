import { NextPage } from "next";
import { useEffect } from "react";

const RickRoll: NextPage = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "https://link.tngdigital.com.my/JmgdVkzaG5MVQGoq6";
    }
  , 5000);

  return () => clearTimeout(timeout);
  }, []);
  return (<p>Redirecting you to the rickroll. All you need to do is wait for 5 seconds. Only the one dares will get rickrolled.</p>);
};

export default RickRoll;

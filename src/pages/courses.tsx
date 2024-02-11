import Default from "@/components/layout/Default";
import { useLottie } from "lottie-react";
import { NextPage } from "next";
import Script from "next/script";
import { useEffect, useRef } from "react";

const Courses: NextPage = () => {
  const style = {
    height: 300,
  };

  const options = {
    animationData: require("@/animation/course.json"),
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  useEffect(() => {
    const element = document.getElementsByName('stripe-buy-button');
  }, []);
  
  return (
    <Default title="Courses">
      {View}
      <Script
        async
        src="https://js.stripe.com/v3/buy-button.js"
      />

      <div className="p-8">
        {/* @ts-ignore */}
        <stripe-buy-button
          buy-button-id="buy_btn_1OhcBvLHvb5JeKOyLsZRyiCZ"
          publishable-key="pk_live_51Iz4wyLHvb5JeKOyx4NH5Ar1NAsmDfrP3KDq4vrq98HGeOAKbuM1IwYykn3NHcVpWMuzfJ4im9Hq1vBcyHmyfUzy00zSEI8OgN"
        />
      </div>

    </Default>
  )
};

export default Courses;

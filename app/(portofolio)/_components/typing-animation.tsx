"use client";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "I'm a Pemula Web Developer!!",
        3000,
        "I'm studying informatika in UIN Suka!!",
        4000,
      ]}
      speed={30}
      wrapper="span"
      className="text-2xl md:text-3xl"
      repeat={Infinity}
      preRenderFirstString
    />
  );
};

export default TypingText;

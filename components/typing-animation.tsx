"use client";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "I'm a Beginner Web Developer.",
        3000,
        "I'm studying informatika in UIN Suka.",
        4000,
        "I'm currently learning TypeScript and Javascript.",
        4000,
      ]}
      speed={30}
      wrapper="span"
      className="text-2xl  sm:text-xl"
      repeat={Infinity}
      preRenderFirstString
    />
  );
};

export default TypingText;

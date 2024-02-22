"use client";

import { motion, useScroll } from "framer-motion";

interface LiIconProps {
  reference: any;
}
const LiIcon = ({ reference }: LiIconProps) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute -left-[3.6rem] stroke-yellow-400">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="fill-none stroke-yellow-400 stroke-1"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className="fill-neutral-100 stroke-[5px]"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse fill-yellow-400 stroke-1"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;

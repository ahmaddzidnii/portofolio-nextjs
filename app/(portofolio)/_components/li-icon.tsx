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
        <circle cx="75" cy="50" r="20" className="stroke-yellow-400 stroke-1 fill-none" />
        <motion.circle style={{ pathLength: scrollYProgress }} cx="75" cy="50" r="20" className="stroke-[5px] fill-neutral-100" />
        <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-yellow-400" />
      </svg>
    </figure>
  );
};

export default LiIcon;

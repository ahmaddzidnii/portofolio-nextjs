"use client";

import { skills } from "@/constant/about";
import { motion } from "framer-motion";

interface SkilProps {
  name: string;
  x: string;
  y: string;
}
const Skil = ({ name, x, y }: SkilProps) => {
  return (
    <motion.div
      className="absolute flex cursor-pointer items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white shadow-black dark:bg-white dark:text-slate-900 lg:px-4 lg:py-2 md:px-3 md:py-1.5 md:text-sm xs:bg-transparent xs:text-slate-900 xs:dark:bg-transparent xs:dark:text-white"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skils = () => {
  return (
    <>
      <h2 className="mb-8 mt-16 w-full text-center text-4xl font-bold xl:mt-64 xl:text-8xl lg:text-6xl md:mb-16 md:mt-32 ">
        Skils
      </h2>
      <div
        className="relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:h-[60vh] sm:bg-circularLightSm
      sm:dark:bg-circularDarkSm xs:h-[50vh]"
      >
        <motion.div
          className="flex cursor-pointer items-center justify-center rounded-full bg-slate-900 p-8 font-semibold text-white shadow-black dark:bg-white dark:text-slate-900 dark:shadow-white lg:p-6 md:p-4 xs:p-2 xs:text-xs "
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>
        {skills.map((item, index) => (
          <Skil key={index} name={item.name} x={item.x} y={item.y} />
        ))}
      </div>
    </>
  );
};

export default Skils;

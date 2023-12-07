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
      className="flex items-center justify-center rounded-full font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 px-6 shadow-black cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-slate-900 xs:dark:bg-transparent xs:dark:text-white"
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
      <h2 className="font-bold text-8xl my-64 w-full text-center md:text-6xl md:my-32  sm:my-16 xs:text-4xl">Skils </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-8 shadow-black cursor-pointer dark:shadow-white lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          WEB
        </motion.div>
        {
          skills.map((item, index) => (
            <Skil
              key={index}
              name={item.name}
              x={item.x}
              y={item.y}
            />
          ))
        }
      </div>
    </>
  );
};

export default Skils;

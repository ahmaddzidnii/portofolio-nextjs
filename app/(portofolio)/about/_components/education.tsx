"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "@/components/li-icon";
import { educations } from "@/constant/about";

interface DetailsProps {
  type: string;
  time: string;
  place: string;
}

const Details = ({ type, time, place }: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="font-medium capitalize xs:text-sm">{time}</span>
        <p className="w-full  font-medium xs:text-sm">{place}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 flex flex-col items-center md:my-32 sm:my-16">
      <h2 className="mb-8 mt-16 w-full text-center text-4xl font-bold xl:mt-64 xl:text-8xl lg:text-6xl md:mb-16 md:mt-32 ">
        Education
      </h2>
      <div ref={ref} className=" relative mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-1 top-0 h-full w-[4px] origin-top bg-yellow-400"
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          {educations.map((item, index) => (
            <Details
              key={index}
              type={item.type}
              time={item.time}
              place={item.place}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;

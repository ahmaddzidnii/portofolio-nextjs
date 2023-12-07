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
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium xs:text-sm">{time}</span>
        <p className="font-medium  w-full xs:text-sm">{place}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>
      <div ref={ref} className=" relative mx-auto">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute -left-1 top-0 w-[4px] h-full bg-yellow-400 origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {
            educations.map((item,index)=>(
              <Details
                key={index}
                type={item.type}
                time={item.time}
                place={item.place}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Education;

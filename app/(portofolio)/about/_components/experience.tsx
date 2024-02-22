"use client";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "@/components/li-icon";
import { experience } from "@/constant/about";

interface DetailsProps {
  postion: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  postion,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
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
          {postion}&nbsp;
          <Link
            className="capitalize text-yellow-400"
            href={companyLink}
            target="_blank"
          >
            @{company}
          </Link>
        </h3>
        <span className="font-medium capitalize xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium xs:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 flex flex-col items-center md:my-32  sm:my-16 xs:my-8">
      <h2 className="mb-8 mt-16 w-full text-center text-4xl font-bold xl:mt-64 xl:text-8xl lg:text-6xl md:mb-16 md:mt-32 ">
        Pengalaman
      </h2>
      <div ref={ref} className="relative mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-1 top-0 h-full w-[4px] origin-top bg-yellow-400"
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          {experience.map((item, index) => (
            <Details
              key={index}
              postion={item.postion}
              company={item.company}
              companyLink={item.companyLink}
              time={item.time}
              address={item.address}
              work={item.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

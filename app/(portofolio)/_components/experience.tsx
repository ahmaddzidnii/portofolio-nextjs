"use client";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./li-icon";

interface DetailsProps {
  postion: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({ postion, company, companyLink, time, address, work }: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">
          {postion}&nbsp;
          <Link className="capitalize text-yellow-400" href={companyLink} target="_blank">
            @{company}
          </Link>
        </h3>
        <span className="capitalize font-medium xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full xs:text-sm">{work}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Pengalaman</h2>
      <div ref={ref} className="mx-auto relative">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute -left-1 top-0 w-[4px] h-full bg-yellow-400 origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details postion="Backend Developer" company="ahmadzidni" companyLink="https://ahmadzidni.site" time="2023 - Sekarang" address="Yogyakarta" work="Membuat open API untuk aplikasi web." />
          <Details postion="Frontend Developer" company="ahmadzidni" companyLink="https://ahmadzidni.site" time="2023 - Sekarang" address="Yogyakarta" work="Pengembangan aplikasi web pengecek detail anime." />
          <Details postion="Fullstack Developer" company="ahmadzidni" companyLink="https://ahmadzidni.site" time="2023 - Sekarang" address="Yogyakarta" work="Pengembangan aplikasi todolist dalam bentuk web." />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

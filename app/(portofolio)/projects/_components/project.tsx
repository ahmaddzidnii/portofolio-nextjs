"use client";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
const FramerImage = motion(Image);

interface ProjectProps {
  title: string;
  type: string;
  img: string;
  link: string;
  github: string;
}

const Project = ({ title, type, img, link, github }: ProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-yellow-400 bg-white dark:bg-[#0a0a0a] p-6 relative xs:p-4">
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} width={400} height={300} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-yellow-400 rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">{title}</h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between">
          <Link href={link} target="_blank" className="text-lg font-semibold text-light underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <AiFillGithub className="w-full h-full" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;

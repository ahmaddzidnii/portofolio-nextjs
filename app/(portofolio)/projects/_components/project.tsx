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
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl border border-solid border-yellow-400 bg-white p-6 dark:bg-[#0a0a0a] xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          width={400}
          height={300}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-yellow-400 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-light text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <AiFillGithub className="h-full w-full" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FramerImage = motion(Image);
interface DetailCertificateProps {
  title: string;
  img: string;
  link: string;
  credentials: string;
  summary: string;
}
const DetailCertificate = ({
  title,
  img,
  link,
  credentials,
  summary,
}: DetailCertificateProps) => {
  return (
    <article className="w-full mb-8 flex items-center justify-between rounded-3xl border border-solid border-yellow-400 bg-white dark:bg-[#0a0a0a]  shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-2xl xs:p-4 ">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          decoding="sync"
          loading="eager"
          width={400}
          height={300}
          className="w-full h-auto"
          whileHover={{
            scale: 1.05,
          }}
          transition={{ duration: 0.2 }}
        />
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-yellow-400 rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6  ">
        <span className="font-medium text-xl xs:text-base">{credentials}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold xs:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium sm:text-sm">{summary}</p>
        <div className="mt-2">
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-slate-900 text-white px-6 p-2 text-lg font-semibold text-light sm:px-4 sm:text-base"
          >
            Visit Certificate
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DetailCertificate;

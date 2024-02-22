"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { certificates } from "@/constant/certificates";
const Sertifikat = () => {
  return (
    <div className="my-32 flex w-full flex-col items-center justify-center md:my-16 sm:my-8">
      <h2 className="mb-8 mt-16 w-full text-center text-4xl font-bold xl:mt-64 xl:text-8xl lg:text-6xl md:mb-16 md:mt-32 ">
        Sertifikat
      </h2>
      <div className="py-5">
        <Button className="ms-auto" asChild>
          <Link href="/certificate">Lihat Semua</Link>
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-8 sm:gap-0 sm:gap-y-8">
        {certificates.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0 }}
            viewport={{ once: true }}
            className="relative col-span-6 h-max w-full rounded-2xl border-2 border-solid border-black sm:col-span-12"
          >
            <div className="group relative overflow-hidden">
              <Image
                src={item.img}
                width={300}
                height={200}
                alt={item.title}
                className="h-auto w-full rounded-2xl "
              />
              <div className="absolute -bottom-10 flex h-full w-full items-center justify-center rounded-2xl bg-slate-900/40 opacity-0 transition-all duration-500 hover:cursor-pointer group-hover:bottom-0 group-hover:opacity-100">
                <Button asChild variant="default" size="lg">
                  <Link target="_blank" href={item.link}>
                    Lihat
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-2xl bg-yellow-400" />
          </motion.div>
        ))}

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.4 }}
          viewport={{ once: true }}
          className="relative col-span-6 h-max w-full rounded-2xl border-2 border-solid border-black sm:col-span-12"
        >
          <div className="group relative overflow-hidden">
            <Image
              src="/img/sertifikat/JSI.png"
              width={300}
              height={200}
              alt="dd"
              className="h-auto w-full rounded-2xl "
            />
            <div className="absolute -bottom-10 flex h-full w-full items-center justify-center rounded-2xl bg-slate-900/40 opacity-0 transition-all duration-500 hover:cursor-pointer group-hover:bottom-0 group-hover:opacity-100">
              <Button asChild variant="default" size="lg">
                <Link
                  target="_blank"
                  href="https://www.sololearn.com/certificates/CC-RZMMCEBH"
                >
                  Lihat
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-2xl bg-yellow-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Sertifikat;

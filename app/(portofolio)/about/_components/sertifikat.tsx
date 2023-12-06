"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Sertifikat = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center my-32 md:my-16 sm:my-8">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Sertifikat</h2>
      <div className="py-5">
        <Button variant="ghost" className="ms-auto" asChild>
          <Link href="/certificate">Lihat Semua</Link>
        </Button>
      </div>
      <div className="grid grid-cols-12 sm:gap-0 sm:gap-y-8 gap-8">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0 }}
          viewport={{ once: true }}
          className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12"
        >
          <div className="relative group overflow-hidden">
            <Image src="/img/sertifikat/BE.png" width={300} height={200} alt="dd" className="w-full h-auto rounded-2xl " />
            <div className="h-full w-full absolute bg-slate-900/40 flex items-center rounded-2xl justify-center -bottom-10 group-hover:bottom-0 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:cursor-pointer">
              <Button asChild variant="default" size="lg">
                <Link target="_blank" href="https://www.dicoding.com/certificates/QLZ9RN52DP5D">
                  Lihat
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12"
        >
          <div className="relative group overflow-hidden">
            <Image src="/img/sertifikat/DJS.png" width={300} height={200} alt="dd" className="w-full h-auto rounded-2xl " />
            <div className="h-full w-full absolute bg-slate-900/40 flex items-center rounded-2xl justify-center -bottom-10 group-hover:bottom-0 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:cursor-pointer">
              <Button asChild variant="default" size="lg">
                <Link target="_blank" href="https://www.dicoding.com/certificates/1OP81M2MQZQK">
                  Lihat
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.3 }}
          viewport={{ once: true }}
          className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12"
        >
          <div className="relative group overflow-hidden">
            <Image src="/img/sertifikat/AWS.png" width={300} height={200} alt="dd" className="w-full h-auto rounded-2xl " />
            <div className="h-full w-full absolute bg-slate-900/40 flex items-center rounded-2xl justify-center -bottom-10 group-hover:bottom-0 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:cursor-pointer">
              <Button asChild variant="default" size="lg">
                <Link target="_blank" href="https://www.dicoding.com/certificates/81P27D7MNZOY">
                  Lihat
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.4 }}
          viewport={{ once: true }}
          className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12"
        >
          <div className="relative group overflow-hidden">
            <Image src="/img/sertifikat/JSI.png" width={300} height={200} alt="dd" className="w-full h-auto rounded-2xl " />
            <div className="h-full w-full absolute bg-slate-900/40 flex items-center rounded-2xl justify-center -bottom-10 group-hover:bottom-0 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:cursor-pointer">
              <Button asChild variant="default" size="lg">
                <Link target="_blank" href="https://www.sololearn.com/certificates/CC-RZMMCEBH">
                  Lihat
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Sertifikat;

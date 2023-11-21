"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Sertifikat = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center pt-16">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Sertifikat</h2>
      <div className="grid grid-cols-12 sm:gap-0 sm:gap-y-8 gap-8">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0 }}
          viewport={{ once: true }}
          className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12"
        >
          <Image src="/img/sertifikat/BE.png" width={300} height={200} alt="dd" className="w-full h-auto rounded-2xl" />
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12"
        >
          <img src="/img/sertifikat/DJS.png" alt="dd" className="w-full h-auto rounded-2xl" />
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.3 }}
          viewport={{ once: true }}
          className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12"
        >
          <img src="/img/sertifikat/AWS.png" alt="dd" className="w-full h-auto rounded-2xl" />
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.4 }}
          viewport={{ once: true }}
          className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12"
        >
          <img src="/img/sertifikat/JSI.png" alt="dd" className="w-full h-auto rounded-2xl" />
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Sertifikat;

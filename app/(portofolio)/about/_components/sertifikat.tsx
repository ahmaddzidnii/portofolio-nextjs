import Image from "next/image";
import React from "react";
const Sertifikat = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center pt-16">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Sertifikat</h2>
      <div className="grid grid-cols-12 sm:gap-0 sm:gap-y-8 gap-8">
        <div className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12">
          <Image src="/img/javaScriptIntermediate.png" width={300} height={200} alt="dd" className="w-full h-auto rounded-2xl" />
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </div>
        <div className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12">
          <img src="https://placehold.co/300x200" alt="dd" className="w-full h-auto rounded-2xl" />
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </div>
        <div className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12">
          <img src="https://placehold.co/300x200" alt="dd" className="w-full h-auto rounded-2xl" />
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </div>
        <div className="col-span-6 relative w-full h-max rounded-2xl border-2 border-solid border-black sm:col-span-12">
          <img src="https://placehold.co/300x200" alt="dd" className="w-full h-auto rounded-2xl" />
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default Sertifikat;

import AnimatedText from "@/components/framer-motion/animation-text";
import AnimateNumber from "@/components/framer-motion/animated-number";
import Experience from "@/app/(portofolio)/about/_components/experience";
import Skils from "@/app/(portofolio)/about/_components/skils";
import Sertifikat from "@/app/(portofolio)/about/_components/sertifikat";
import Education from "@/app/(portofolio)/about/_components/education";

export const metadata = {
  title: "About",
};
const AboutPage = async () => {
  return (
    <main className="flex flex-col w-full items-center justify-center pt-16">
      <AnimatedText text="About Me." className="lg:!text-7xl sm:!text-6xl xs:!text-3xl  mb-16 sm:mb-8" />
      <div className="w-full grid grid-cols-8 gap-16 sm:gap-8  xl:col-span-4   ">
        <div className="col-span-3 flex flex-col items-start justify-start md:order-2 md:col-span-8">
          <h2 className="mb-4 text-lg font-bold uppercase">Biography</h2>
          <p className="font-medium">
            Saya lahir pada tanggal 12 Maret 2005 di Sleman, Indonesia, saya memiliki keinginan yang besar untuk menjadi seorang programer yang kompeten. Sejak SMA, saya tertarik dengan dunia teknologi dan komputasi. Ketertarikannya
            terhadap coding dan perangkat lunak mendorongnya untuk mengejar karier di dunia pemrograman.
          </p>
          <p className="my-4 font-medium">Saya pertama kali mengenal coding pada saat saya SMA. Pada saat SMA, saya belajar tentang HTML, CSS, dan JavaScript.</p>
          <p className="font-medium">Saya sekaranng sedang berkuliah di Universitas Islam Negeri Sunan Kalijaga di Yogyakarta dan mengambil jurusan Informatika. </p>
        </div>

        <div className="col-span-3 relative w-full h-max rounded-2xl border-2 border-solid border-black xl:col-span-4 md:order-1 md:col-span-8">
          <img src="https://placehold.co/100x150" alt="dd" className="w-full h-auto rounded-2xl" />
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-yellow-400" />
        </div>

        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center  md:order-3">
          <div className="flex flex-col items-end justify-center xl:items-center ">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimateNumber value={0} />
            </span>
            <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm">Pengalaman</h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center ">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimateNumber value={5} /> +
            </span>
            <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm">Project</h2>
          </div>
          <div className="flex flex-col items-end justify-center xl:items-center ">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimateNumber value={19} />
            </span>
            <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm">Years old</h2>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Skils />
      </div>

      <Experience />
      <Education />

      <div className="w-full">
        <Sertifikat />
      </div>
    </main>
  );
};

export default AboutPage;

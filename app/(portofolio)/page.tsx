import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import TypingText from "@/components/typing-animation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portofolio",
};
export default function Home() {
  return (
    <>
      <div className="flex w-full min-h-screen mx-auto items-center  ">
        <div className="grid grid-cols-5 items-center gap-16 my-10 ">
          <div className="col-span-2 md:col-span-5">
            <Image
              src="/img/profile.jpg"
              alt="profile"
              width={400}
              height={400}
              className="mx-auto rounded-full border-8 border-yellow-400"
            />
          </div>
          <div className="col-span-3 mx-auto flex flex-col w-full md:col-span-5 sm:text-center ">
            <h1 className="text-5xl xs:text-3xl sm:text-4xl  font-bold my-2">
              Hello, I'm Ahmad Zidni,{" "}
            </h1>
            <TypingText />
            <p className="mt-5 capitalize font-medium xs:text-sm">
              Selamat datang di portofolio saya. portofolio ini dibuat
              mengguanakan framework next js. Portofolio ini dibuat untuk
              memenuhi tugas akhir dari mata kuliah Pemrograman Web tapi boong.
            </p>
            <div className="mt-5 flex gap-x-5 sm:justify-center">
              <Button asChild>
                <Link href="/contact">Contact me</Link>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <Link
                  href="https://anime.ahmadzidni.site"
                  target="_blank"
                >
                  Website
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

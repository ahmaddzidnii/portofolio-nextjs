import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import TypingText from "./_components/typing-animation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portofolio",
};
export default function Home() {
  return (
    <>
      <div className="flex w-full min-h-screen  max-w-7xl mx-auto items-center px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 lg:gap-y-0">
          <div className="relative mx-auto rounded-full overflow-hidden transform transition-transform duration-500 ">
            <Image src="/img/profile.jpg" alt="profile" width={400} height={400} className="mx-auto rounded-full border-8 border-yellow-400" />
          </div>
          <div className="mx-auto flex flex-col w-full ">
            <h1 className="text-3xl md:text-5xl font-bold">Hello, I'm Ahmad Zidni, </h1>
            <TypingText />
            <p className="mt-5 text-muted-foreground text-justify">Selamat datang di portofolio saya. portofolio ini dibuat mengguanakan framework next js.</p>
            <div className="mt-5 flex gap-x-5">
              <Button>Contact me</Button>
              <Button variant="outline" asChild>
                <Link href="https://anime.ahmadzidni.site" target="_blank">
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

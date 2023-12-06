import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="transition items-center gap-x-2 flex hover:opacity-75">
        <Image src="/img/logo-pitik.png" alt="logo" height={30} width={30} />
        <p className={cn("text-xl text-neutral-700 dark:text-neutral-300 font-bold")}>ahmadzidni.</p>
      </div>
    </Link>
  );
};

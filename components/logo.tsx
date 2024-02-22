import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2 transition hover:opacity-75">
        <Image src="/img/logo-pitik.png" alt="logo" height={30} width={30} />
        <p
          className={cn(
            "text-xl font-bold text-neutral-700 dark:text-neutral-300",
          )}
        >
          ahmadzidni.
        </p>
      </div>
    </Link>
  );
};

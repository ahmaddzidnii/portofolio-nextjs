"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { midNavbar } from "@/constant/navbar";

const NavLink = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex gap-x-5 lg:hidden">
      {midNavbar.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="group relative font-bold"
        >
          {item.name}
          <span
            className={cn(
              "ease absolute  -bottom-0.5 left-0 inline-block h-0.5 bg-slate-200 transition-[width] duration-300 group-hover:w-full ",
              item.href === pathname ? "w-full" : "w-0",
            )}
          ></span>
        </Link>
      ))}
    </nav>
  );
};

export default NavLink;

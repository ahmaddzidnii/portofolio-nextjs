"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { midNavbar } from "@/constant/navbar";

const NavLink = () => {
  const pathname = usePathname();

  return (
    <nav className="gap-x-5 mx-auto flex lg:hidden">
      {midNavbar.map((item) => (
        <Link key={item.name} href={item.href} className="relative group font-bold">
          {item.name}
          <span className={cn("h-0.5 inline-block  bg-slate-200 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ", item.href === pathname ? "w-full" : "w-0")}></span>
        </Link>
      ))}
    </nav>
  );
};

export default NavLink;

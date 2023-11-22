"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavLink = () => {
  const pathname = usePathname();

  const midNavbar = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <nav className="gap-x-5 mx-auto flex md:hidden">
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

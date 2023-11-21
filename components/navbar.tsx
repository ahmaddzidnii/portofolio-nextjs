"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "./logo";
import { ModeToggle } from "./toogle-theme";
import MobileSidebar from "./mobile-sidebar";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-navbar";

const Navbar = () => {
  const pathname = usePathname();
  const isScroled = useScrollTop();

  const midNavbar = [
    {
      name: "Home",
      href: "/",
      isActive: pathname == "/",
    },
    {
      name: "About",
      href: "/about",
      isActive: pathname == "/about",
    },
    {
      name: "Projects",
      href: "/projects",
      isActive: pathname == "/projects",
    },
    {
      name: "Articles",
      href: "/articles",
      isActive: pathname == "/articles",
    },
  ];

  const endNavbar = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ahmadzidni1/",
      icon: <AiFillInstagram className="w-6 h-6" />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/ahmad-zidni-51b602292/",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: "Github",
      href: "https://github.com/ahmaddzidnii",
      icon: <FaGithub className="w-6 h-6" />,
    },
  ];

  return (
    <header className="fixed z-[100] top-0 w-full  bg-slate-50 dark:bg-slate-900 p-4 border-b shadow-sm ">
      <div className="flex  justify-between  h-14 w-full  items-center container mx-auto sm:!px-0 ">
        <div className="flex items-center gap-x-2 ">
          <MobileSidebar />
          <Logo />
        </div>
        <nav className="gap-x-5 mx-auto flex md:hidden">
          {midNavbar.map((item) => (
            <Link key={item.name} href={item.href} className="relative group font-bold">
              {item.name}
              <span className={cn("h-0.5 inline-block  bg-slate-200 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ", item.isActive ? "w-full" : "w-0")}></span>
            </Link>
          ))}
        </nav>
        <nav className="ms-auto  flex md:hidden items-center gap-x-3 mr-4">
          {endNavbar.map((item) => (
            <Link key={item.name} href={item.href} target="_blank">
              {item.icon}
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;

"use client";
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const MobileSidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
      name: "Contact",
      href: "/contact",
      isActive: pathname == "/contact",
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
    <div className="hidden sm:block">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <Logo />
          </SheetHeader>
          <div className="flex flex-col gap-y-20  my-10">
            <div className="flex flex-col space-y-2">
              {midNavbar.map((item) => (
                <Button onClick={() => setOpen(false)} key={item.name} variant={item.isActive ? "default" : "ghost"} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              {endNavbar.map((item) => (
                <Button key={item.name} variant="ghost" asChild>
                  <Link href={item.href} target="_blank">
                    {item.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;

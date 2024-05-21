"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import { endNavbar, midNavbar } from "@/constant/navbar";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/toogle-theme";
import NavLink from "@/components/navbar/nav-link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { HamburgerMenu } from "./hamburger-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerCallback = (value: boolean) => {
    setIsOpen(value);
  };
  return (
    <header className="fixed top-0 z-50 w-full ">
      <div className="flex flex-col">
        <div className="w-full border-b  bg-background py-4 shadow-sm backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60 dark:bg-[#1f1f1f] dark:supports-[backdrop-filter]:bg-[#1f1f1f]/60">
          <div className="container-nav  flex h-12 w-full  items-center justify-between">
            <div className="flex items-center gap-x-4 ">
              <HamburgerMenu onChangeCallback={hamburgerCallback} />
              <Logo />
            </div>
            <NavLink />
            <nav className="mr-4 ms-auto flex h-full items-center gap-x-3 lg:hidden">
              <TooltipProvider>
                {endNavbar.map((item) => (
                  <Tooltip key={item.name} delayDuration={200}>
                    <TooltipTrigger asChild>
                      <Button asChild variant="ghost" size="icon">
                        <Link href={item.href} target="_blank">
                          {item.icon}
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
      <div className="hidden w-full lg:block">
        <motion.div
          className="border-b bg-background py-4 shadow-sm backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60 dark:bg-[#1f1f1f] dark:supports-[backdrop-filter]:bg-[#1f1f1f]/60"
          animate={
            isOpen
              ? {
                  opacity: 1,
                  display: "block",
                }
              : {
                  opacity: 0,
                  transitionEnd: {
                    display: "none",
                  },
                }
          }
        >
          <div className="flex w-full flex-col items-center gap-5 pt-5">
            {midNavbar.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative font-bold"
              >
                {item.name}
                <span
                  className={cn(
                    "ease absolute  -bottom-0.5 left-0 inline-block h-0.5 bg-slate-200 transition-[width] duration-300 group-hover:w-full ",
                  )}
                ></span>
              </a>
            ))}
            <ModeToggle />
          </div>
          <div className="mt-5 flex w-full justify-center">
            {endNavbar.map((item) => (
              <Button key={item.name} asChild variant="ghost" size="default">
                <Link href={item.href} target="_blank">
                  {item.icon}
                </Link>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
      {/* <div className="hidden w-full lg:block">
        <div
          className={cn(
            " border-b bg-background py-4 shadow-sm backdrop-blur-2xl transition-all duration-300 ease-in-out supports-[backdrop-filter]:bg-background/60 dark:bg-[#1f1f1f] dark:supports-[backdrop-filter]:bg-[#1f1f1f]/60",
            isOpen ? "visible opacity-100" : "invisible opacity-0",
          )}
        >
          <div className="flex w-full flex-col items-center gap-5 pt-5">
            {midNavbar.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative font-bold"
              >
                {item.name}
                <span
                  className={cn(
                    "ease absolute  -bottom-0.5 left-0 inline-block h-0.5 bg-slate-200 transition-[width] duration-300 group-hover:w-full ",
                  )}
                ></span>
              </a>
            ))}
            <ModeToggle />
          </div>
          <div className="mt-5 flex w-full justify-center">
            {endNavbar.map((item) => (
              <Button key={item.name} asChild variant="ghost" size="default">
                <Link href={item.href} target="_blank">
                  {item.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Navbar;

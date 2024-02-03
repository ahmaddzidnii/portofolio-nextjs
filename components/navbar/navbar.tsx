"use client";
import Link from "next/link";

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
import { ProfileNavbar } from "./profile-navbar";
import { HamburgerMenu } from "./hamburger-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerCallback = (value: boolean) => {
    setIsOpen(value);
  };
  return (
    <header className=" z-50 bg-background dark:bg-[#1f1f1f] fixed top-0  w-full py-4 border-b shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-[#1f1f1f]/60">
      <div className="flex  justify-between h-12 w-full  items-center container-nav">
        <div className="flex items-center gap-x-4 ">
          <HamburgerMenu onChangeCallback={hamburgerCallback} />
          <Logo />
        </div>
        <NavLink />
        <nav className="ms-auto flex lg:hidden items-center gap-x-3 mr-4">
          <TooltipProvider>
            {endNavbar.map((item) => (
              <Tooltip
                key={item.name}
                delayDuration={200}
              >
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                    >
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

        <ProfileNavbar />
      </div>
      {isOpen && (
        <div className="hidden lg:block">
          <div className="flex flex-col w-full items-center gap-5 pt-5">
            {midNavbar.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group font-bold"
              >
                {item.name}
                <span
                  className={cn(
                    "h-0.5 inline-block  bg-slate-200 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 "
                  )}
                ></span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center w-full mt-5`">kk</div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

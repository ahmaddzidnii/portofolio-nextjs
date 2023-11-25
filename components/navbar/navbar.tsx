import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidLogInCircle } from "react-icons/bi";

import Link from "next/link";
import { UserButton, currentUser } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/toogle-theme";
import MobileSidebar from "@/components/navbar/mobile-sidebar";
import NavLink from "@/components/navbar/nav-link";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Navbar = async () => {
  const user = await currentUser();

  const endNavbar = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ahmadzidni1/",
      icon: <AiFillInstagram className="w-6 h-6" />,
      tooltip: "Follow me on Instagram",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/ahmad-zidni-51b602292/",
      icon: <FaLinkedin className="w-6 h-6" />,
      tooltip: "Follow me on Linkedin",
    },
    {
      name: "Github",
      href: "https://github.com/ahmaddzidnii",
      icon: <FaGithub className="w-6 h-6" />,
      tooltip: "Follow me on Github",
    },
  ];

  return (
    <header className="fixed z-[100] top-0 w-full  bg-slate-50 dark:bg-slate-900 p-4 border-b shadow-sm ">
      <div className="flex  justify-between  h-14 w-full  items-center container mx-auto sm:!px-0 ">
        <div className="flex items-center gap-x-2 ">
          <MobileSidebar />
          <Logo />
        </div>
        <NavLink />
        <nav className="ms-auto  flex md:hidden items-center gap-x-3 mr-4">
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
        <div className="xs:hidden">
          {!user ? (
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" asChild>
                    <Link href="/login">
                      <BiSolidLogInCircle className="w-7 h-7" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Login Now!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

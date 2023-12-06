import Link from "next/link";
import { UserButton, currentUser } from "@clerk/nextjs";

import { endNavbar } from "@/data/navbar";
import { BiSolidLogInCircle } from "react-icons/bi";

import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/toogle-theme";
import MobileSidebar from "@/components/navbar/mobile-sidebar";
import NavLink from "@/components/navbar/nav-link";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import dynamic from "next/dynamic";
import { ProfileNavbar } from "./profile-navbar";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <header className="fixed z-[100] top-0 w-full  bg-slate-50 dark:bg-slate-900 p-4 border-b shadow-sm ">
      <div className="flex  justify-between  h-14 w-full  items-center container mx-auto sm:!px-0 ">
        <div className="flex items-center gap-x-2 ">
          <MobileSidebar />
          <Logo />
        </div>
        <NavLink />
        <nav className="ms-auto  flex lg:hidden items-center gap-x-3 mr-4">
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
          <ProfileNavbar />
        </div>
      </div>
    </header>
  );
};

// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
export default Navbar;

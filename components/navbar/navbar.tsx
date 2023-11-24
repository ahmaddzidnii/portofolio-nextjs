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

const Navbar = async () => {
  const user = await currentUser();

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
        <NavLink />
        <nav className="ms-auto  flex md:hidden items-center gap-x-3 mr-4">
          {endNavbar.map((item) => (
            <Link key={item.name} href={item.href} target="_blank">
              {item.icon}
            </Link>
          ))}
          <ModeToggle />
        </nav>
        <div className="xs:hidden">
          {!user ? (
            <Button variant="ghost">
              <Link href="/login">
                <BiSolidLogInCircle className="w-7 h-7" />
              </Link>
            </Button>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

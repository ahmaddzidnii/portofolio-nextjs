"use client";
import { MenuIcon } from "lucide-react";

import { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toogle-theme";
import { endNavbar, midNavbar } from "@/constant/navbar";

const MobileSidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const { user, isSignedIn } = useUser();

  return (
    <div className="hidden lg:block">
      <Sheet
        modal={false}
        open={open}
        onOpenChange={setOpen}
      >
        <SheetTrigger asChild>
          <Button variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            {isSignedIn ? (
              <div className="flex items-center gap-x-4">
                <UserButton afterSignOutUrl="/" />
                <h1 className="text-xl font-bold">{user?.fullName}</h1>
              </div>
            ) : (
              <Button
                asChild
                variant="ghost"
              >
                <Link href="/login">Login</Link>
              </Button>
            )}
          </SheetHeader>
          <div className="flex flex-col items-center justify-between h-[90%] mt-6">
            <div className="flex flex-col space-y-2 w-full">
              {midNavbar.map((item) => (
                <Button
                  onClick={() => setOpen(false)}
                  key={item.name}
                  variant={item.href === pathname ? "default" : "ghost"}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
            <ModeToggle />
            <div className="flex items-center justify-center w-full">
              {endNavbar.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                >
                  <Link
                    href={item.href}
                    target="_blank"
                  >
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

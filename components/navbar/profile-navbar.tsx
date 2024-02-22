"use client";

import Link from "next/link";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const ProfileNavbar = () => {
  const { isSignedIn } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      {!isSignedIn ? (
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link href="/login">
                <BiSolidLogInCircle className="h-8 w-8" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Login Now!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <UserButton userProfileMode="modal" afterSignOutUrl="/" />
      )}
    </>
  );
};

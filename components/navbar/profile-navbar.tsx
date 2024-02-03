"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export const ProfileNavbar = () => {
  const { isSignedIn } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="w-9 h-9 rounded-full bg-neutral-300" />;
  }
  return (
    <>
      {!isSignedIn ? (
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link href="/login">
                <BiSolidLogInCircle className="w-8 h-8" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Login Now!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <UserButton
          userProfileMode="modal"
          afterSignOutUrl="/"
        />
      )}
    </>
  );
};

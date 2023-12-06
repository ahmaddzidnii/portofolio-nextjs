"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
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
    return <Skeleton className="w-10 h-10 rounded-full" />;
  }
  return (
    <>
      {!isSignedIn ? (
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
        <UserButton userProfileMode="modal" afterSignOutUrl="/" />
      )}
    </>
  );
};

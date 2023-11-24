"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const UiNoLogin = () => {
  return (
    <div className="min-w-[80%] min-h-[80%] flex justify-center items-center">
      <Button asChild>
        <Link href="/login?redirect=/contact">Login untuk melanjutkan.</Link>
      </Button>
    </div>
  );
};

export default UiNoLogin;

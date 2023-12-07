"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const UiNoLogin = () => {
  return (
    <div className="min-w-[80%] min-h-[80%] flex flex-col justify-center items-center">
      <div className="flex items-center gap-x-5">
        <AlertTriangle className="w-20 h-20" />
        <h1 className="text-3xl font-bold">Tindakan tidak diizikan</h1>
      </div>
      <Button asChild>
        <Link href="/login?redirect_url=/contact">Login untuk melanjutkan!</Link>
      </Button>
    </div>
  );
};

export default UiNoLogin;

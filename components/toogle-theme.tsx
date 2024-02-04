"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className="w-36 ">
      <div className="flex items-center space-x-2 w-full">
        <Switch
          id="toggle-mode"
          disabled={!isMounted}
          onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
        />
        <Label
          htmlFor="toggle-mode"
          className="w-full"
        >
          Dark Mode
        </Label>
      </div>
    </div>
  );
}

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <input
        type="checkbox"
        id="darkmode-toggle"
        onChange={(e) => {
          if (e.target.checked) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      />
      <label
        className="toggle"
        htmlFor="darkmode-toggle"
      >
        <Sun className="absolute top-[4px] left-1 z-10 font-semibold text-yellow-100 dark:text-[#1f1f1f]" />

        <Moon className="absolute top-[4px] left-9 z-10" />
      </label>
    </>
  );
}

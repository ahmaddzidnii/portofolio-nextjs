"use client";

import { useTheme } from "next-themes";

import { DarkModeToggle } from "react-dark-mode-toggle-2";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex w-full items-center justify-center">
      <DarkModeToggle
        onChange={(isDarkMode) => setTheme(isDarkMode ? "dark" : "light")}
        isDarkMode={theme === "dark"}
        size={60}
      />
    </div>
  );
}

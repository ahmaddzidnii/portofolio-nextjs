"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export const ClerkCustomProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();
  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === "dark" ? dark : "" || undefined,
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "auto",
          logoImageUrl: "/img/logo-pitik.png",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site-config";

import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/img/logo-pitik.png",
    href: "/img/logo-pitik.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ baseTheme: shadesOfPurple, layout: { socialButtonsPlacement: "bottom", socialButtonsVariant: "auto", logoImageUrl: "/img/logo-pitik.png" } }}>
      <html lang="en" suppressHydrationWarning>
        <body className={poppins.className}>
          <NextTopLoader showSpinner={false} height={5} />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site-config";

import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ClerkProvider>
          <NextTopLoader showSpinner={false} height={5} />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

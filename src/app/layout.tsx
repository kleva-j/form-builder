import "@/app/globals.css";

import type { Metadata } from "next";

import { ConsoleContextProvider } from "@/dashboard/context/ConsoleContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { AxiomWebVitals } from "next-axiom";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Form-Builder",
  description: "Generated and track form submission with Form-Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ConsoleContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <AxiomWebVitals />
              {children}
              <Toaster />
            </ThemeProvider>
          </ConsoleContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

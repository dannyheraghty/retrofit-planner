import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { defaultMetadata } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

export const metadata: Metadata = defaultMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-IE" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-ink-900">
        {children}
      </body>
    </html>
  );
}

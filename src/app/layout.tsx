import type { Metadata } from "next";
import ThemeProvider from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import "./globals.css";
import React from "react";
import Navbar from "@/components/ui/hero/navbar/Navbar";
import Footer from "@/components/sections/home/footer";

export const metadata: Metadata = {
  title: "Icon. From Idea to Solutions",
  description:
      "At Icon., we transform your ideas into comprehensive software solutions. Our team drives innovation across every phase of the SDLC—from conceptualization and architecture to deployment and maintenance—ensuring your vision comes to life.",
  icons: {
    icon: "/custom-icons/icon.jpg",
    apple: "/custom-icons/icon.jpg",
    shortcut: "/custom-icons/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
        <ThemeScript />
    </head>
      <body
        className={`antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
      <ThemeProvider>
        <Navbar/>
          {children}
        <Footer/>
      </ThemeProvider>
      </body>
    </html>
  );
}

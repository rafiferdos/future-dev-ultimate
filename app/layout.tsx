import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import React from "react";
import { Providers } from "./providers";

import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import {
  fontAtma,
  fontHindSiliguri,
  fontPlaypen,
  fontRoboto,
} from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background text-foreground font-siliguri antialiased",
          fontRoboto.variable,
          fontPlaypen.variable,
          fontHindSiliguri.variable,
          fontAtma.variable
        )}
        suppressHydrationWarning
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

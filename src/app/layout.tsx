import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavbarUts from "./components/NavbarUts";
import Footer from "./components/Footer";

const karlaMono = localFont({
  src: "./fonts/karla.ttf",
  variable: "--font-karla-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

const montserratMono = localFont({
  src: "./fonts/montserrat.ttf",
  variable: "--font-montserrat-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratMono.variable} ${karlaMono.variable}`}
        >
        <NextUIProvider>
          <div className="flex-col justify-between flex min-h-screen h-full">
            <NavbarUts />
            {children}
            <Footer />
          </div>
          <Toaster position="top-center" />
        </NextUIProvider>
      </body>
    </html>
  );
}

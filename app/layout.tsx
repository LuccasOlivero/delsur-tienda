import "./globals.css";
import type { Metadata } from "next";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { Urbanist } from "next/font/google";
import ProgressBarProvider from "@/providers/progress-bar-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DelSur - Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ProgressBarProvider />
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

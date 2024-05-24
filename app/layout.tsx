import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import ProgressBarProvider from "@/providers/progress-bar-provider";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./globals.css";

import { Urbanist } from "next/font/google";
import type { Metadata } from "next";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DelSur - Tienda",
  description: "Tienda",
};
// cuando haces click en un producto se carga un loading raro, ver

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

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
  title: "DecoDelSur",
  description: "Tienda",
};

// TODO: hcaer las peticiones secundarias, primero que se cargue el producto principal y despues los suggested products
// TODO: no andan los graficos de ventas e ingresos
// TODO: meorar el ts de todo la tienda
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

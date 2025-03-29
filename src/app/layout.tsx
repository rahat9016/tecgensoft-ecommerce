import Header from "@/components/users/layout/header/header";
import type { Metadata } from "next";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import StoreProvider from "./StoreProvider";

import NoInternet from "@/components/shared/NoInternet";
import Footer from "@/components/users/layout/footer/footer";

import SideCart from "@/components/users/layout/SideCart";

import QueryProvider from "./QueryProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Tecgen Soft E-commerce",
  description: "Tecgen Soft E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#E6E9EB]">
        <StoreProvider>
          <QueryProvider>
            <SideCart />
            <NoInternet />
            <Header />
            <NoInternet />
            <Toaster />
            {children}
            <Footer />
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

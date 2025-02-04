import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "@/components/users/layout/header/header";


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
          <Header/>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

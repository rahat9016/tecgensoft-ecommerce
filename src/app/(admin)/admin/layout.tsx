import { AppSidebar } from "@/components/admin/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Tecgen Soft E-commerce",
  description: "Tecgen Soft E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

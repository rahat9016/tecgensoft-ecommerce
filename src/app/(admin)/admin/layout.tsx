import { AppSidebar } from "@/components/admin/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "Admin - Tecgen Soft E-commerce",
  description: "Tecgen Soft E-commerce",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <section className={`w-full ${poppins.variable}`}>
        <SidebarTrigger />
        <div className="p-4 bg-white mr-4 rounded-lg">
          {children}
        </div>
      </section>
    </SidebarProvider>
  );
}


import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import Hero from "@/components/Hero";

const Index = () => (
  <SidebarProvider>
    <div className="flex min-h-screen w-full bg-[#181818]">
      {/* Sidebar */}
      <AppSidebar />
      {/* Main area */}
      <main className="flex-1 flex flex-col justify-between">
        <Hero />
      </main>
    </div>
  </SidebarProvider>
);

export default Index;

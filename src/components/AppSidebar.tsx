
import React from "react";
import { Music, User, Calendar, Mail, Store, Home } from "lucide-react";
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Music", path: "/music", icon: Music },
  { name: "Biography", path: "/biography", icon: User },
  { name: "Store", path: "/store", icon: Store },
  { name: "Events", path: "/events", icon: Calendar },
  { name: "Contact", path: "/contact", icon: Mail },
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar collapsible className={`bg-[#181818] border-r border-sidebar-border h-screen flex flex-col w-20 md:w-48`}>
      {/* Mini sidebar trigger */}
      <SidebarTrigger className="m-2 self-end" />
      <SidebarContent>
        <div className="py-6 flex flex-col items-center">
          {/* Artist logo/initials placeholder */}
          <div className="rounded-full bg-[#C4975A] text-[#1A1A1A] font-extrabold text-3xl w-14 h-14 flex items-center justify-center mb-2 border-4 border-[#F5E6D3] shadow-lg select-none">
            D
          </div>
          <div className="text-[#F5E6D3] font-serif text-lg tracking-tight text-center hidden md:block">DIMITRI</div>
        </div>
        <SidebarMenu>
          {navItems.map(item => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild isActive={isActive(item.path)} className="px-3 py-3 md:py-2 gap-2">
                <NavLink to={item.path} end className="flex items-center w-full h-full group">
                  <item.icon className="w-6 h-6 mr-0 md:mr-3 text-[#C4975A] group-hover:text-[#F5E6D3] transition-colors duration-150" />
                  <span className="hidden md:inline text-[#F5E6D3] group-hover:text-[#C4975A] text-base font-serif">{item.name}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <div className="mt-auto p-4 text-center text-xs text-sidebar-foreground/50 select-none">© 2025 Dimitri</div>
    </Sidebar>
  );
};

export default AppSidebar;

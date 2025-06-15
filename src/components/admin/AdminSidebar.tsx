
import React, { useState } from "react";
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Menu,
  X,
} from "lucide-react";

interface TabItem {
  id: string;
  name: string;
  icon: any;
}

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  onLogout: () => void;
}

const tabItems: TabItem[] = [
  { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
  { id: 'products', name: 'Products', icon: Package },
  { id: 'orders', name: 'Orders', icon: ShoppingCart },
  { id: 'customers', name: 'Customers', icon: Users },
  { id: 'settings', name: 'Settings', icon: Settings }
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  setActiveTab,
  onLogout,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ADMIN FIXED TOP BAR: even more unmistakable */}
      <div className="fixed top-0 left-0 w-full z-[99] bg-gray-950 flex items-center justify-between px-4 py-3 border-b border-gray-800 shadow-lg md:hidden">
        <div className="flex items-center space-x-2">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 w-2 h-7 rounded-full mr-2" />
          <h1 className="text-xl font-extrabold tracking-wide uppercase text-white font-serif">
            Admin Panel
          </h1>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-cyan-400 hover:text-white focus:outline-none"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Sidebar Drawer Overlay (Mobile) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-[97] md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      {/* Sidebar Drawer (Mobile) */}
      <aside
        className={`
          fixed z-[98] top-0 left-0 h-screen w-[80vw] max-w-xs bg-gray-950 p-6 transform transition-transform duration-200
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:top-0 md:left-0 md:h-screen md:w-64 md:translate-x-0 md:block
          shadow-2xl md:shadow-none
        `}
        style={{ maxWidth: "100vw" }}
      >
        {/* Sidebar Top Bar with Close button on Mobile */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <div className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 w-2 h-7 rounded-full mr-2" />
            <h1 className="text-xl font-extrabold tracking-wide uppercase text-white font-serif">
              Admin Panel
            </h1>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-cyan-400 hover:text-white focus:outline-none"
            aria-label="Close sidebar menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        {/* Logo/Header (Desktop Only) */}
        <div className="hidden md:flex md:flex-col md:space-y-1 mb-10">
          <div className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 w-2 h-9 rounded-full mr-2" />
            <h1 className="text-2xl font-extrabold tracking-widest text-white font-serif">
              ADMIN PANEL
            </h1>
          </div>
          <p className="text-cyan-400 text-sm mt-2">E-commerce Management</p>
        </div>
        {/* Nav */}
        <nav className="space-y-2 mt-8 md:mt-0">
          {tabItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  activeTab === item.id
                    ? 'bg-cyan-900 text-cyan-300 font-bold'
                    : 'text-gray-400 hover:bg-cyan-900 hover:text-cyan-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <button
            onClick={onLogout}
            className="w-full text-red-400 hover:text-red-300 px-4 py-2 text-left transition-colors font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>
      {/* Spacer for fixed AppBar on mobile */}
      <div className="h-14 md:hidden" />
    </>
  );
};

export default AdminSidebar;

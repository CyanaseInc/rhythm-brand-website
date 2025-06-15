
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

  // Sidebar for desktop & mobile drawer/menu for small screens
  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden w-full flex items-center justify-between bg-gray-900 p-4 border-b border-gray-800 fixed top-0 left-0 z-40">
        <h1 className="text-lg font-bold text-white font-serif">Admin Panel</h1>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Open sidebar menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Drawer Overlay (Mobile) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      {/* Sidebar Drawer (Mobile) */}
      <aside
        className={`
          fixed z-50 top-0 left-0 h-screen w-56 bg-gray-900 p-6 transform md:translate-x-0 transition-transform duration-200
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:top-auto md:left-auto md:h-auto md:w-64 md:translate-x-0 md:block
        `}
        style={{ maxWidth: "100vw" }}
      >
        {/* Logo/Header (Desktop Only) */}
        <div className="hidden md:block mb-8">
          <h1 className="text-2xl font-bold text-white font-serif">Admin Panel</h1>
          <p className="text-gray-400 text-sm">E-commerce Management</p>
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
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <button
            onClick={onLogout}
            className="w-full text-red-400 hover:text-red-300 px-4 py-2 text-left transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>
      {/* Give space for the fixed top bar on mobile */}
      <div className="h-14 md:hidden" />
    </>
  );
};

export default AdminSidebar;

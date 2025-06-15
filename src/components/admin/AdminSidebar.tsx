
import React, { useState } from "react";
import { BarChart3, Package, ShoppingCart, Users, Settings, Menu } from "lucide-react";

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

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Sidebar is always visible on md+, toggled on mobile
  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-900 p-2 rounded-lg text-white shadow-lg"
        aria-label="Open sidebar"
        onClick={() => setShowSidebar(true)}
        style={{ display: showSidebar ? 'none' : undefined }}
      >
        <Menu className="w-6 h-6" />
      </button>
      {/* Overlay on mobile */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
      <div className={
        `fixed top-0 left-0 z-50 w-64 bg-gray-900 min-h-screen p-6 transition-transform duration-300 md:relative md:translate-x-0
        ${showSidebar ? "translate-x-0" : "-translate-x-full"}
        md:block md:static md:shadow-none`
      }>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white font-serif">Admin Panel</h1>
            <p className="text-gray-400 text-sm">E-commerce Management</p>
          </div>
          {/* Close button mobile */}
          <button
            className="md:hidden text-gray-300 hover:text-white text-2xl px-2"
            onClick={() => setShowSidebar(false)}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>
        <nav className="space-y-2">
          {tabItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setShowSidebar(false); }}
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
      </div>
    </>
  );
};

export default AdminSidebar;

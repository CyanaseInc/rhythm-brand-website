
import React from "react";
import { BarChart3, Package, ShoppingCart, Users, Settings } from "lucide-react";

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

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, setActiveTab, onLogout }) => (
  <div className="w-64 bg-gray-900 min-h-screen p-6">
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-white font-serif">Admin Panel</h1>
      <p className="text-gray-400 text-sm">E-commerce Management</p>
    </div>
    <nav className="space-y-2">
      {tabItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
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
);

export default AdminSidebar;

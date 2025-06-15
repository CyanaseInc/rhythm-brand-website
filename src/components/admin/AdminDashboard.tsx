
import React from "react";
import { BarChart3, ShoppingCart, Package, Users } from "lucide-react";

const AdminDashboard = ({ orders, products }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-white font-serif">Dashboard Overview</h2>
    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm font-medium">Total Sales</p>
            <p className="text-2xl font-bold text-white">$12,345</p>
          </div>
          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm font-medium">Total Orders</p>
            <p className="text-2xl font-bold text-white">{orders.length}</p>
          </div>
          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm font-medium">Products</p>
            <p className="text-2xl font-bold text-white">{products.length}</p>
          </div>
          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm font-medium">Customers</p>
            <p className="text-2xl font-bold text-white">1,234</p>
          </div>
          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
    {/* Optionally: Add recent orders section here */}
  </div>
);
export default AdminDashboard;

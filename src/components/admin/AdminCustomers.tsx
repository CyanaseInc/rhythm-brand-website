
import React from "react";
import { Loader } from "lucide-react";

const AdminCustomers = ({ customers, customersLoading, customersError }) => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-white font-serif">Customer Management</h2>
    <div className="bg-gray-900 rounded-lg p-6">
      {customersLoading ? (
        <div className="text-gray-300 flex items-center">
          <span className="animate-spin mr-2"><Loader className="w-5 h-5" /></span> Loading customers...
        </div>
      ) : customersError ? (
        <div className="text-red-400">Error: {customersError}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 text-white">Username</th>
                <th className="text-left py-3 text-white">Email</th>
                <th className="text-left py-3 text-white">Is Staff</th>
                <th className="text-left py-3 text-white">Active</th>
                <th className="text-left py-3 text-white">Date Joined</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-b border-gray-800">
                  <td className="py-3 text-white">{c.username}</td>
                  <td className="py-3 text-white">{c.email}</td>
                  <td className="py-3 text-white">{c.is_staff ? "Yes" : "No"}</td>
                  <td className="py-3 text-white">{c.is_active ? "Yes" : "No"}</td>
                  <td className="py-3 text-white">{c.date_joined ? c.date_joined.split("T")[0] : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
);
export default AdminCustomers;

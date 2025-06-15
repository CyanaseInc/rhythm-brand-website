import React from "react";
import { Loader } from "lucide-react";

const AdminOrders = ({ orders = [], ordersLoading, ordersError }) => (
  <div className="space-y-4 sm:space-y-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">Order Management</h2>
    <div className="bg-gray-900 rounded-lg p-3 sm:p-6">
      {ordersLoading ? (
        <div className="text-gray-300 flex items-center">
          <span className="animate-spin mr-2"><Loader className="w-5 h-5" /></span> Loading orders...
        </div>
      ) : ordersError ? (
        <div className="text-red-400">Error: {ordersError}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 sm:py-3 text-white">Order #</th>
                <th className="text-left py-2 sm:py-3 text-white">User</th>
                <th className="text-left py-2 sm:py-3 text-white">Status</th>
                <th className="text-left py-2 sm:py-3 text-white">Total</th>
                <th className="text-left py-2 sm:py-3 text-white">Paid</th>
                <th className="text-left py-2 sm:py-3 text-white">Created</th>
                <th className="text-left py-2 sm:py-3 text-white">Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-800">
                  <td className="py-2 sm:py-3 text-white">{order.order_number}</td>
                  <td className="py-2 sm:py-3 text-white">{order.user}</td>
                  <td className="py-2 sm:py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === "Completed" ? "bg-green-600 text-white"
                        : order.status === "Processing" ? "bg-yellow-600 text-black"
                        : "bg-red-600 text-white"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 text-white">${order.total}</td>
                  <td className="py-2 sm:py-3 text-white">{order.paid ? "Yes" : "No"}</td>
                  <td className="py-2 sm:py-3 text-white">{order.created_at ? order.created_at.split("T")[0] : ""}</td>
                  <td className="py-2 sm:py-3 text-white">
                    <ul className="space-y-1">
                      {order.items.map((item, idx) => (
                        <li key={idx} className="text-xs">
                          {item.product_name} x{item.quantity} (${item.price})
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
);

export default AdminOrders;

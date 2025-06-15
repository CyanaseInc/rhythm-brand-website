
import React from "react";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Plus } from "lucide-react";

const AdminProducts = ({
  products = [],
  openAddProductModal,
  openEditProductModal,
  handleDeleteProduct,
}) => (
  <div className="space-y-4 sm:space-y-6">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">Product Management</h2>
      <Button 
        onClick={openAddProductModal}
        className="bg-gray-700 hover:bg-gray-600 text-white"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Product
      </Button>
    </div>
    <div className="bg-gray-900 rounded-lg p-3 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-lg p-3 sm:p-4 flex flex-col">
            <div className="relative w-full h-40 sm:h-48 mb-2 sm:mb-4">
              {(product.images && product.images.length > 0 ? product.images[0] : product.image) && (
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-2"
                />
              )}
              {product.images && product.images.length > 1 && (
                <div className="flex space-x-1 absolute left-1 bottom-1">
                  {product.images.slice(1, 3).map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      className="h-7 w-7 sm:h-8 sm:w-8 rounded border border-gray-900"
                      alt={`Alt ${idx + 2}`}
                    />
                  ))}
                </div>
              )}
            </div>
            <h3 className="font-semibold text-white mb-1 sm:mb-2">{product.name}</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">{product.description}</p>
            <div className="flex justify-between items-center mb-1 sm:mb-2">
              <span className="text-gray-300 font-bold">${product.price}</span>
              <span className="text-gray-400 text-xs sm:text-sm">Stock: {product.stock}</span>
            </div>
            <div className="flex space-x-2 mt-auto pt-2">
              <Button 
                onClick={() => openEditProductModal(product)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm"
              >
                <Edit className="w-3 h-3 mr-1" />
                Edit
              </Button>
              <Button 
                onClick={() => handleDeleteProduct(product.id)}
                variant="destructive"
                className="flex-1 text-xs sm:text-sm bg-red-600 hover:bg-red-700"
              >
                <Trash2 className="w-3 h-3 mr-1" />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default AdminProducts;

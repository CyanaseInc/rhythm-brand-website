
import React from "react";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Plus } from "lucide-react";

const AdminProducts = ({
  products,
  openAddProductModal,
  openEditProductModal,
  handleDeleteProduct,
}) => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <h2 className="text-3xl font-bold text-white font-serif">Product Management</h2>
      <Button 
        onClick={openAddProductModal}
        className="bg-gray-700 hover:bg-gray-600 text-white"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Product
      </Button>
    </div>
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-lg p-4">
            <div className="relative w-full h-48 mb-4">
              {(product.images && product.images.length > 0 ? product.images[0] : product.image) && (
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
              )}
              {product.images && product.images.length > 1 && (
                <div className="flex space-x-1 absolute left-1 bottom-1">
                  {product.images.slice(1, 3).map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      className="h-8 w-8 rounded border border-gray-900"
                      alt={`Alt ${idx + 2}`}
                    />
                  ))}
                </div>
              )}
            </div>
            <h3 className="font-semibold text-white mb-2">{product.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{product.description}</p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 font-bold">${product.price}</span>
              <span className="text-gray-400 text-sm">Stock: {product.stock}</span>
            </div>
            <div className="flex space-x-2">
              <Button 
                onClick={() => openEditProductModal(product)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm"
              >
                <Edit className="w-3 h-3 mr-1" />
                Edit
              </Button>
              <Button 
                onClick={() => handleDeleteProduct(product.id)}
                variant="destructive"
                className="flex-1 text-sm bg-red-600 hover:bg-red-700"
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

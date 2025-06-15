
import React, { useState, useEffect } from "react";
import { X, UploadCloud, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  stock: number;
  sizes: string[];
  colors: string[];
  description: string;
  inStock: boolean;
  bestseller: boolean;
  images?: string[];
}

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (form: Partial<Product>, images: File[]) => void;
  uploading: boolean;
  editingProduct: Product | null;
  initialForm: Partial<Product>;
}

const ProductModal: React.FC<ProductModalProps> = ({
  open,
  onClose,
  onSave,
  uploading,
  editingProduct,
  initialForm,
}) => {
  const [productForm, setProductForm] = useState<Partial<Product>>(initialForm);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>(
    initialForm.images ? initialForm.images : []
  );

  useEffect(() => {
    setProductForm(initialForm);
    setImageFiles([]);
    setImagePreviews(initialForm.images ? initialForm.images : []);
  }, [open, initialForm]);

  const handleSelectImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setImageFiles(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleRemoveImage = (idx: number) => {
    setImageFiles((files) => files.filter((_, i) => i !== idx));
    setImagePreviews((previews) => previews.filter((_, i) => i !== idx));
  };

  const handleSizeToggle = (size: string) => {
    setProductForm((prev) => ({
      ...prev,
      sizes: prev.sizes?.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...(prev.sizes || []), size],
    }));
  };

  const handleColorToggle = (color: string) => {
    setProductForm((prev) => ({
      ...prev,
      colors: prev.colors?.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...(prev.colors || []), color],
    }));
  };

  const handleChange = (field: keyof Product, value: any) => {
    setProductForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(productForm, imageFiles);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
              type="button"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">Product Name *</label>
                <input
                  type="text"
                  value={productForm.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Category</label>
                <select
                  value={productForm.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg"
                >
                  <option value="tshirts">T-Shirts</option>
                  <option value="hoodies">Hoodies</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Price *</label>
                <input
                  type="number"
                  value={productForm.price}
                  onChange={(e) => handleChange("price", parseFloat(e.target.value))}
                  className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Original Price</label>
                <input
                  type="number"
                  value={productForm.originalPrice}
                  onChange={(e) => handleChange("originalPrice", parseFloat(e.target.value))}
                  className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg"
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Stock Quantity</label>
                <input
                  type="number"
                  value={productForm.stock}
                  onChange={(e) => handleChange("stock", parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                  Product Images *
                  <span className="ml-2 text-xs font-normal text-gray-400">(Select one or more)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer mb-3">
                  <UploadCloud className="w-5 h-5 text-gray-300" />
                  <span className="text-sm text-gray-300">Choose Images</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleSelectImages}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>
                {imagePreviews.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {imagePreviews.map((src, idx) => (
                      <div key={idx} className="relative inline-block">
                        <img src={src} alt="Preview" className="h-16 w-16 object-cover rounded border border-gray-800" />
                        <button
                          type="button"
                          className="absolute top-0 right-0 bg-black/60 text-white border-none rounded-full p-0.5"
                          onClick={() => handleRemoveImage(idx)}
                          title="Remove"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {imagePreviews.length === 0 && (
                  <span className="text-xs text-gray-400">No images selected</span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Description</label>
              <textarea
                value={productForm.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Sizes</label>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleSizeToggle(size)}
                    className={`px-3 py-1 rounded border transition-colors ${
                      productForm.sizes?.includes(size)
                        ? 'bg-gray-700 text-white border-gray-600'
                        : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Colors</label>
              <div className="flex flex-wrap gap-2">
                {['Black', 'White', 'Gray', 'Navy', 'Blue', 'Red', 'Green', 'Natural'].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => handleColorToggle(color)}
                    className={`px-3 py-1 rounded border transition-colors ${
                      productForm.colors?.includes(color)
                        ? 'bg-gray-700 text-white border-gray-600'
                        : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={!!productForm.inStock}
                  onChange={(e) => handleChange("inStock", e.target.checked)}
                  className="mr-2 accent-gray-600"
                />
                <span className="text-white">In Stock</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={!!productForm.bestseller}
                  onChange={(e) => handleChange("bestseller", e.target.checked)}
                  className="mr-2 accent-gray-600"
                />
                <span className="text-white">Bestseller</span>
              </label>
            </div>
            <div className="flex space-x-4 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center"
                disabled={uploading}
              >
                {uploading ? (
                  <>
                    <Loader className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  editingProduct ? 'Update Product' : 'Add Product'
                )}
              </Button>
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="flex-1 border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
                disabled={uploading}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

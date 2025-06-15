import React, { useEffect, useState } from "react";
import axios from "axios";
import { Package, ShoppingCart, BarChart3, Users, Settings, Image, Plus, Edit, Trash2, Search, Filter, X, UploadCloud, Loader } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ProductModal from "@/components/admin/ProductModal";
import AdminSidebar from "@/components/admin/AdminSidebar";

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
  images?: string[]; // allow for multiple images
}

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  // Mock data for demonstration
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Digital Dreams Hoodie",
      price: 65,
      originalPrice: 85,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      category: "hoodies",
      stock: 25,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Gray"],
      description: "Premium cotton blend hoodie with embroidered logo",
      inStock: true,
      bestseller: true
    },
    {
      id: 2,
      name: "Electronic Waves T-Shirt",
      price: 35,
      originalPrice: 45,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "tshirts",
      stock: 50,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Blue"],
      description: "Soft cotton t-shirt with unique wave design",
      inStock: true,
      bestseller: false
    }
  ]);

  const [productForm, setProductForm] = useState<Partial<Product>>({
    name: '',
    price: 0,
    originalPrice: 0,
    image: '',
    category: 'tshirts',
    stock: 0,
    sizes: [],
    colors: [],
    description: '',
    inStock: true,
    bestseller: false,
    images: [],
  });

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // NEW: Real states for orders, customers, with loading/error
  const [orders, setOrders] = useState<any[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [ordersError, setOrdersError] = useState<string | null>(null);

  const [customers, setCustomers] = useState<any[]>([]);
  const [customersLoading, setCustomersLoading] = useState(false);
  const [customersError, setCustomersError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8000/api/customers/")
      .then((res) => setCustomers(res.data))
      .catch((err) => setError("Error fetching customer data"))
      .finally(() => setLoading(false));
  }, []);

  // Fetch orders when tab opens
  useEffect(() => {
    if (activeTab === "orders") {
      setOrdersLoading(true);
      setOrdersError(null);
      axios.get("http://localhost:8000/api/orders/")
        .then((res) => setOrders(res.data))
        .catch((err) => setOrdersError("Failed to load orders"))
        .finally(() => setOrdersLoading(false));
    }
  }, [activeTab]);

  // Fetch customers when tab opens
  useEffect(() => {
    if (activeTab === "customers") {
      setCustomersLoading(true);
      setCustomersError(null);
      axios.get("http://localhost:8000/api/customers/")
        .then((res) => setCustomers(res.data))
        .catch((err) => setCustomersError("Failed to load customers"))
        .finally(() => setCustomersLoading(false));
    }
  }, [activeTab]);

  // Image file selection: preview and store Files
  const handleSelectImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setImageFiles(files);

    // Generate previews
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Remove one image from selection
  const handleRemoveImage = (idx: number) => {
    setImageFiles(files => files.filter((_, i) => i !== idx));
    setImagePreviews(previews => previews.filter((_, i) => i !== idx));
  };

  const openAddProductModal = () => {
    setEditingProduct(null);
    setProductForm({
      name: '',
      price: 0,
      originalPrice: 0,
      image: '',
      category: 'tshirts',
      stock: 0,
      sizes: [],
      colors: [],
      description: '',
      inStock: true,
      bestseller: false,
      images: [],
    });
    setIsProductModalOpen(true);
  };

  const openEditProductModal = (product: Product) => {
    setEditingProduct(product);
    setProductForm(product);
    setIsProductModalOpen(true);
  };

  const handleDeleteProduct = (productId: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(prev => prev.filter(p => p.id !== productId));
      toast({
        title: "Product Deleted",
        description: "The product has been successfully deleted.",
      });
    }
  };

  const handleProductModalClose = () => {
    setIsProductModalOpen(false);
  };

  const handleSaveProduct = async (form: Partial<Product>, imageFiles: File[]) => {
    if (!form.name || !form.price || imageFiles.length === 0) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and select at least one image.",
        variant: "destructive"
      });
      return;
    }
    setUploading(true);
    try {
      // File uploads and product save logic remain the same
      const formData = new FormData();
      imageFiles.forEach((file) => {
        formData.append("images", file);
      });
      const res = await axios.post("http://localhost:8000/api/upload-image/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const imageUrls: string[] = res.data.image_urls;

      let outProduct: Product;
      if (editingProduct) {
        const updateObj: Product = {
          ...form as Product,
          id: editingProduct.id,
          images: imageUrls,
          image: imageUrls[0] || "",
        };
        setProducts(prev =>
          prev.map(p => p.id === editingProduct.id ? updateObj : p)
        );
        outProduct = updateObj;
        toast({
          title: "Product Updated",
          description: "The product has been successfully updated.",
        });
      } else {
        const maxId = products.length
          ? Math.max(...products.map(p => p.id))
          : 0;
        const newProduct: Product = {
          ...form as Product,
          id: maxId + 1,
          images: imageUrls,
          image: imageUrls[0] || "",
        };
        setProducts(prev => [...prev, newProduct]);
        outProduct = newProduct;
        toast({
          title: "Product Added",
          description: "The new product has been successfully added.",
        });
      }
      setIsProductModalOpen(false);
      setUploading(false);
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Could not upload product images.",
        variant: "destructive",
      });
      setUploading(false);
    }
  };

  const handleSizeToggle = (size: string) => {
    setProductForm(prev => ({
      ...prev,
      sizes: prev.sizes?.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...(prev.sizes || []), size]
    }));
  };

  const handleColorToggle = (color: string) => {
    setProductForm(prev => ({
      ...prev,
      colors: prev.colors?.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...(prev.colors || []), color]
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      credentials.username.trim() === 'admin' &&
      credentials.password === 'admin123'
    ) {
      setIsAuthenticated(true);
    } else {
      toast({
        title: "Invalid Login",
        description: "Incorrect username or password.",
        variant: "destructive"
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
          <h1 className="text-3xl font-bold text-white mb-6 text-center font-serif">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-2">Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-4">
            Demo: admin / admin123
          </p>
        </div>
      </div>
    );
  }

  const tabItems = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'orders', name: 'Orders', icon: ShoppingCart },
    { id: 'customers', name: 'Customers', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white font-serif">Dashboard Overview</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Recent Orders */}
      <div className="bg-gray-900 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Recent Orders</h3>
        <div className="space-y-3">
          {orders.slice(0, 5).map((order) => (
            <div key={order.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
              <div>
                <p className="font-semibold text-white">{order.id}</p>
                <p className="text-sm text-gray-400">{order.customer}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white">${order.total}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  order.status === 'Completed' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-black'
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
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
                {(product.images && product.images.length > 0 ? product.images[0]
                  : product.image) && (
                  <img
                    src={product.images && product.images.length > 0
                      ? product.images[0]
                      : product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                )}
                {/* Optionally show more images as thumbnails */}
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

  const renderOrders = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white font-serif">Order Management</h2>
      <div className="bg-gray-900 rounded-lg p-6">
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
                  <th className="text-left py-3 text-white">Order #</th>
                  <th className="text-left py-3 text-white">User</th>
                  <th className="text-left py-3 text-white">Status</th>
                  <th className="text-left py-3 text-white">Total</th>
                  <th className="text-left py-3 text-white">Paid</th>
                  <th className="text-left py-3 text-white">Created</th>
                  <th className="text-left py-3 text-white">Items</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-800">
                    <td className="py-3 text-white">{order.order_number}</td>
                    <td className="py-3 text-white">{order.user}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        order.status === "Completed" ? "bg-green-600 text-white"
                          : order.status === "Processing" ? "bg-yellow-600 text-black"
                          : "bg-red-600 text-white"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 text-white">${order.total}</td>
                    <td className="py-3 text-white">{order.paid ? "Yes" : "No"}</td>
                    <td className="py-3 text-white">{order.created_at ? order.created_at.split("T")[0] : ""}</td>
                    <td className="py-3 text-white">
                      <ul className="space-y-1">
                        {order.items.map((item: any, idx: number) => (
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

  const renderCustomers = () => (
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

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white font-serif">Settings</h2>
      <div className="bg-gray-900 rounded-lg p-6 text-gray-200">
        <p>This is a placeholder for admin settings.</p>
        {/* Optionally you can load and display real settings, admin, or site info here */}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'products': return renderProducts();
      case 'orders': return renderOrders();
      case 'customers': return renderCustomers();
      case 'settings': return renderSettings();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-20">
        <div className="flex">
          <AdminSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onLogout={() => setIsAuthenticated(false)}
          />
          <div className="flex-1 p-8">
            {renderContent()}
          </div>
        </div>
      </div>
      <ProductModal
        open={isProductModalOpen}
        onClose={handleProductModalClose}
        onSave={handleSaveProduct}
        uploading={uploading}
        editingProduct={editingProduct}
        initialForm={productForm}
      />
    </div>
  );
};

export default Admin;

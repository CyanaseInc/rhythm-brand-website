
import React, { useState } from 'react';
import { Package, ShoppingCart, BarChart3, Users, Settings, Image, Plus, Edit, Trash2, Search, Filter, X } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

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

  const [orders, setOrders] = useState([
    {
      id: 'ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      date: '2024-01-15',
      total: 125.50,
      status: 'Completed',
      items: [
        { name: 'Digital Dreams Hoodie', quantity: 1, price: 65 },
        { name: 'Electronic Waves T-Shirt', quantity: 2, price: 35 }
      ]
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      date: '2024-01-14',
      total: 85.00,
      status: 'Processing',
      items: [
        { name: 'Bass Drop Zip Hoodie', quantity: 1, price: 75 }
      ]
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
    bestseller: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in real app, this would be secure
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Use admin/admin123');
    }
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
      bestseller: false
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

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!productForm.name || !productForm.price || !productForm.image) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (editingProduct) {
      // Update existing product
      setProducts(prev => prev.map(p => 
        p.id === editingProduct.id 
          ? { ...productForm as Product, id: editingProduct.id }
          : p
      ));
      toast({
        title: "Product Updated",
        description: "The product has been successfully updated.",
      });
    } else {
      // Add new product
      const newProduct = {
        ...productForm as Product,
        id: Math.max(...products.map(p => p.id)) + 1
      };
      setProducts(prev => [...prev, newProduct]);
      toast({
        title: "Product Added",
        description: "The new product has been successfully added.",
      });
    }
    
    setIsProductModalOpen(false);
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2A2317] to-[#1A1A1A] flex items-center justify-center">
        <div className="bg-[#F5E6D3] rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
          <h1 className="text-3xl font-bold text-[#2A2317] mb-6 text-center font-serif">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[#2A2317] font-semibold mb-2">Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full p-3 border border-[#D4B896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4975A]"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-[#2A2317] font-semibold mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full p-3 border border-[#D4B896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4975A]"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#C4975A] hover:bg-[#8B7355] text-[#F5E6D3] py-3 rounded-lg font-semibold transition-colors"
            >
              Login
            </button>
          </form>
          <p className="text-center text-[#8B7355] text-sm mt-4">
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
      <h2 className="text-3xl font-bold text-[#F5E6D3] font-serif">Dashboard Overview</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#F5E6D3] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8B7355] text-sm font-medium">Total Sales</p>
              <p className="text-2xl font-bold text-[#2A2317]">$12,345</p>
            </div>
            <div className="w-12 h-12 bg-[#C4975A] rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#F5E6D3]" />
            </div>
          </div>
        </div>
        
        <div className="bg-[#F5E6D3] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8B7355] text-sm font-medium">Total Orders</p>
              <p className="text-2xl font-bold text-[#2A2317]">{orders.length}</p>
            </div>
            <div className="w-12 h-12 bg-[#C4975A] rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-[#F5E6D3]" />
            </div>
          </div>
        </div>
        
        <div className="bg-[#F5E6D3] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8B7355] text-sm font-medium">Products</p>
              <p className="text-2xl font-bold text-[#2A2317]">{products.length}</p>
            </div>
            <div className="w-12 h-12 bg-[#C4975A] rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-[#F5E6D3]" />
            </div>
          </div>
        </div>
        
        <div className="bg-[#F5E6D3] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8B7355] text-sm font-medium">Customers</p>
              <p className="text-2xl font-bold text-[#2A2317]">1,234</p>
            </div>
            <div className="w-12 h-12 bg-[#C4975A] rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-[#F5E6D3]" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-[#F5E6D3]/10 rounded-lg p-6">
        <h3 className="text-xl font-bold text-[#F5E6D3] mb-4">Recent Orders</h3>
        <div className="space-y-3">
          {orders.slice(0, 5).map((order) => (
            <div key={order.id} className="flex items-center justify-between p-3 bg-[#F5E6D3]/20 rounded-lg">
              <div>
                <p className="font-semibold text-[#F5E6D3]">{order.id}</p>
                <p className="text-sm text-[#D4B896]">{order.customer}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[#F5E6D3]">${order.total}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  order.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
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
        <h2 className="text-3xl font-bold text-[#F5E6D3] font-serif">Product Management</h2>
        <Button 
          onClick={openAddProductModal}
          className="bg-[#C4975A] hover:bg-[#8B7355] text-[#F5E6D3]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="bg-[#F5E6D3]/10 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-[#F5E6D3]/20 rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-[#F5E6D3] mb-2">{product.name}</h3>
              <p className="text-sm text-[#D4B896] mb-2">{product.description}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#C4975A] font-bold">${product.price}</span>
                <span className="text-[#D4B896] text-sm">Stock: {product.stock}</span>
              </div>
              <div className="flex space-x-2">
                <Button 
                  onClick={() => openEditProductModal(product)}
                  className="flex-1 bg-[#C4975A] hover:bg-[#8B7355] text-[#F5E6D3] text-sm"
                >
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button 
                  onClick={() => handleDeleteProduct(product.id)}
                  variant="destructive"
                  className="flex-1 text-sm"
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
      <h2 className="text-3xl font-bold text-[#F5E6D3] font-serif">Order Management</h2>
      
      <div className="bg-[#F5E6D3]/10 rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#D4B896]/30">
                <th className="text-left py-3 text-[#F5E6D3]">Order ID</th>
                <th className="text-left py-3 text-[#F5E6D3]">Customer</th>
                <th className="text-left py-3 text-[#F5E6D3]">Date</th>
                <th className="text-left py-3 text-[#F5E6D3]">Total</th>
                <th className="text-left py-3 text-[#F5E6D3]">Status</th>
                <th className="text-left py-3 text-[#F5E6D3]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-[#D4B896]/20">
                  <td className="py-3 text-[#F5E6D3]">{order.id}</td>
                  <td className="py-3 text-[#F5E6D3]">
                    <div>
                      <p>{order.customer}</p>
                      <p className="text-sm text-[#D4B896]">{order.email}</p>
                    </div>
                  </td>
                  <td className="py-3 text-[#F5E6D3]">{order.date}</td>
                  <td className="py-3 text-[#F5E6D3] font-semibold">${order.total}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'Completed' ? 'bg-green-500 text-white' : 
                      order.status === 'Processing' ? 'bg-yellow-500 text-black' : 
                      'bg-red-500 text-white'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex space-x-2">
                      <button className="text-[#C4975A] hover:text-[#8B7355]">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'products': return renderProducts();
      case 'orders': return renderOrders();
      case 'customers': return <div className="text-[#F5E6D3]">Customer management coming soon...</div>;
      case 'settings': return <div className="text-[#F5E6D3]">Settings panel coming soon...</div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2A2317] to-[#1A1A1A]">
      <Navigation />
      
      <div className="pt-20">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-[#F5E6D3]/10 min-h-screen p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-[#F5E6D3] font-serif">Admin Panel</h1>
              <p className="text-[#D4B896] text-sm">E-commerce Management</p>
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
                        ? 'bg-[#C4975A] text-[#F5E6D3]'
                        : 'text-[#D4B896] hover:bg-[#F5E6D3]/20 hover:text-[#F5E6D3]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-[#D4B896]/30">
              <button
                onClick={() => setIsAuthenticated(false)}
                className="w-full text-red-400 hover:text-red-300 px-4 py-2 text-left transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {isProductModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#F5E6D3] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#2A2317]">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h2>
                <button 
                  onClick={() => setIsProductModalOpen(false)}
                  className="text-[#8B7355] hover:text-[#2A2317]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#2A2317] font-semibold mb-2">Product Name *</label>
                    <input
                      type="text"
                      value={productForm.name}
                      onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                      className="w-full p-3 border border-[#D4B896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4975A]"
                      placeholder="Enter product name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#2A2317] font-semibold mb-2">Category</label>
                    <select
                      value={productForm.category}
                      onChange={(e) => setProductForm({...productForm, category: e.target.value})}
                      className="w-full p-3 border border-[#D4B896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4975A]"
                    >
                      <option value="tshirts">T-Shirts</option>
                      <option value="hoodies">Hoodies</option>
                      <option value="accessories">Accessories</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#2A2317] font-semibold mb-2">Price *</label>
                    <input
                      type="number"
                      value={productForm.price}
                      onChange={(e) => setProductForm({...productForm, price: parseFloat(e.target.value)})}
                      className="w-full p-3 border border-[#D4B896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4975A]"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#2A2317] font-semibold mb-2">Original Price</label>
                    <input
                      type="number"
                      value={productForm.originalPrice}
                      onChange={(e) => setProductForm({...productForm, originalPrice: parseFloat(e.target.value)})}
                      className="w-full p-3 border border-[#D4B896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4975A]"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2A2317] font-semibold mb-2">Stock Quantity</label>
                    <input
                      type="number"
                      value={productForm.stock}
                      onChange={(e) => setProductForm({...productForm, stock: parseInt(e.target.value)})}
                      className="w-full p-3 border border-[#D4B896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4975A]"
                      placeholder="0"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2A2317] font-semibold mb-2">Image URL *</label>
                    <input
                      type="url"
                      value={productForm.image}
                      onChange={(e) => setProductForm({...productForm, image: e.target.value})}
                      className="w-full p-3 border border-[#D4B896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4975A]"
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#2A2317] font-semibold mb-2">Description</label>
                  <textarea
                    value={productForm.description}
                    onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                    className="w-full p-3 border border-[#D4B896] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4975A]"
                    rows={3}
                    placeholder="Enter product description"
                  />
                </div>

                <div>
                  <label className="block text-[#2A2317] font-semibold mb-2">Sizes</label>
                  <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size'].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleSizeToggle(size)}
                        className={`px-3 py-1 rounded border transition-colors ${
                          productForm.sizes?.includes(size)
                            ? 'bg-[#C4975A] text-[#F5E6D3] border-[#C4975A]'
                            : 'bg-white text-[#2A2317] border-[#D4B896] hover:bg-[#F5E6D3]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#2A2317] font-semibold mb-2">Colors</label>
                  <div className="flex flex-wrap gap-2">
                    {['Black', 'White', 'Gray', 'Navy', 'Blue', 'Red', 'Green', 'Natural'].map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => handleColorToggle(color)}
                        className={`px-3 py-1 rounded border transition-colors ${
                          productForm.colors?.includes(color)
                            ? 'bg-[#C4975A] text-[#F5E6D3] border-[#C4975A]'
                            : 'bg-white text-[#2A2317] border-[#D4B896] hover:bg-[#F5E6D3]'
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
                      checked={productForm.inStock}
                      onChange={(e) => setProductForm({...productForm, inStock: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-[#2A2317]">In Stock</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={productForm.bestseller}
                      onChange={(e) => setProductForm({...productForm, bestseller: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-[#2A2317]">Bestseller</span>
                  </label>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#C4975A] hover:bg-[#8B7355] text-[#F5E6D3]"
                  >
                    {editingProduct ? 'Update Product' : 'Add Product'}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setIsProductModalOpen(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;

import React, { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import FloatingCheckout from '../components/FloatingCheckout';
import CheckoutModal from '../components/CheckoutModal';
import { ShoppingCart, Plus, Minus, Search, Filter, Star, Heart, Truck, Shield, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import axios from "axios";

const Store = () => {
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [buyNowLoading, setBuyNowLoading] = useState(false);
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Digital Dreams Hoodie",
      price: 65,
      originalPrice: 85,
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop"
      ],
      category: "hoodies",
      rating: 4.8,
      reviews: 124,
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
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop"
      ],
      category: "tshirts",
      rating: 4.6,
      reviews: 89,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Blue"],
      description: "Soft cotton t-shirt with unique wave design",
      inStock: true,
      bestseller: false
    },
    {
      id: 3,
      name: "Synth Logo Cap",
      price: 25,
      originalPrice: 35,
      images: [
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop"
      ],
      category: "accessories",
      rating: 4.7,
      reviews: 56,
      sizes: ["One Size"],
      colors: ["Black", "White"],
      description: "Adjustable cap with embroidered synth logo",
      inStock: true,
      bestseller: false
    },
    {
      id: 4,
      name: "Bass Drop Zip Hoodie",
      price: 75,
      originalPrice: 95,
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop"
      ],
      category: "hoodies",
      rating: 4.9,
      reviews: 203,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Charcoal", "Navy"],
      description: "Premium zip-up hoodie with bass drop graphic",
      inStock: false,
      bestseller: true
    },
    {
      id: 5,
      name: "Circuit Board Tank Top",
      price: 30,
      originalPrice: 40,
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop"
      ],
      category: "tshirts",
      rating: 4.4,
      reviews: 67,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Gray"],
      description: "Lightweight tank with circuit board print",
      inStock: true,
      bestseller: false
    },
    {
      id: 6,
      name: "Vinyl Record Tote Bag",
      price: 20,
      originalPrice: 28,
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop"
      ],
      category: "accessories",
      rating: 4.5,
      reviews: 91,
      sizes: ["One Size"],
      colors: ["Black", "Natural"],
      description: "Eco-friendly canvas tote with vinyl record design",
      inStock: true,
      bestseller: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'hoodies', name: 'Hoodies', count: products.filter(p => p.category === 'hoodies').length },
    { id: 'tshirts', name: 'T-Shirts', count: products.filter(p => p.category === 'tshirts').length },
    { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'reviews': return b.reviews - a.reviews;
        default: return a.name.localeCompare(b.name);
      }
    });
  }, [products, searchTerm, selectedCategory, sortBy, priceRange]);

  const addToCart = (productId: number) => {
    setCart(prev => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalItems = () => Object.values(cart).reduce((sum, count) => sum + count, 0);
  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, count]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product ? product.price * count : 0);
    }, 0);
  };

  const handleCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleOrderComplete = () => {
    setCart({});
    toast({
      title: "Order Completed!",
      description: "Your order has been successfully placed. You'll receive a confirmation email shortly.",
    });
  };

  const handleBuyNow = async () => {
    if (!selectedProduct) return;
    if (!selectedProduct.inStock) {
      toast({
        title: "Out of Stock",
        description: "Sorry, this product is not available at the moment.",
        variant: "destructive",
      });
      return;
    }
    if (!selectedSize) {
      toast({
        title: "Select Size",
        description: "Please select a size before continuing.",
        variant: "destructive",
      });
      return;
    }
    if (!selectedColor) {
      toast({
        title: "Select Color",
        description: "Please select a color before continuing.",
        variant: "destructive",
      });
      return;
    }
    setBuyNowLoading(true);
    try {
      // Replace this URL with your Django backend endpoint!
      await axios.post("http://localhost:8000/api/purchase/", {
        product_id: selectedProduct.id,
        size: selectedSize,
        color: selectedColor,
        // Additional fields can be added here (e.g. quantity, user email etc).
      });
      toast({
        title: "Order initiated!",
        description: "Your order request has been sent. You'll be contacted via email.",
      });
      setIsCheckoutModalOpen(false);
      closeProductModal();
    } catch (err) {
      toast({
        title: "Error sending order",
        description: "Failed to contact the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setBuyNowLoading(false);
    }
  };

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setSelectedImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-20">
        {/* Store Header */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Official Store</h1>
            <p className="text-xl text-gray-300">Premium Music Merchandise & Apparel</p>
            <div className="flex items-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-green-400" />
                <span className="text-sm">Free shipping over $75</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-gray-400" />
                <span className="text-sm">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-gray-900 rounded-lg shadow-sm p-6 sticky top-24">
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-gray-700 text-white'
                            : 'text-gray-300 hover:bg-gray-800'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-semibold text-white mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-gray-600"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-gray-900 rounded-lg shadow-sm p-4">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <span className="text-gray-300">{filteredAndSortedProducts.length} products</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-700 bg-gray-800 text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                </div>

                {/* Cart Summary */}
                <div className="bg-gray-800 rounded-lg p-3 min-w-[200px]">
                  <div className="flex items-center space-x-2 mb-1">
                    <ShoppingCart className="w-4 h-4 text-gray-400" />
                    <span className="font-semibold text-white">Cart ({getTotalItems()})</span>
                  </div>
                  <p className="text-xl font-bold text-gray-300">${getTotalPrice()}</p>
                  {getTotalItems() > 0 && (
                    <button 
                      onClick={handleCheckout}
                      className="w-full mt-2 bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Checkout
                    </button>
                  )}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="bg-gray-900 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className="relative">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                        onClick={() => openProductModal(product)}
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col space-y-2">
                        {product.bestseller && (
                          <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            Bestseller
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            Out of Stock
                          </span>
                        )}
                        {product.originalPrice > product.price && (
                          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            Sale
                          </span>
                        )}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-3 right-3 p-2 bg-gray-800/90 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Heart 
                          className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                        />
                      </button>

                      {/* Cart Count Badge */}
                      {cart[product.id] && (
                        <div className="absolute bottom-3 right-3 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {cart[product.id]}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-5">
                      <h3 className="font-semibold text-white mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{product.description}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-2xl font-bold text-white">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      
                      {/* Sizes */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Available Sizes:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.map((size) => (
                            <span key={size} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Add to Cart Controls */}
                      <div className="flex items-center space-x-2">
                        {cart[product.id] ? (
                          <div className="flex items-center space-x-2 flex-1">
                            <button 
                              onClick={() => removeFromCart(product.id)}
                              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-lg min-w-[2rem] text-center text-white">{cart[product.id]}</span>
                            <button 
                              onClick={() => addToCart(product.id)}
                              disabled={!product.inStock}
                              className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white p-2 rounded-lg transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(product.id)}
                            disabled={!product.inStock}
                            className="flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Information */}
              <div className="bg-gray-900 rounded-lg shadow-sm p-8 mt-12">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Payment & Shipping</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">Payment Methods</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• MTN Mobile Money</li>
                      <li>• Credit/Debit Cards</li>
                      <li>• Flutterwave Secure Payment</li>
                      <li>• PayPal (Coming Soon)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">Shipping Info</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Free shipping on orders over $75</li>
                      <li>• 5-7 business days delivery</li>
                      <li>• Order confirmation via email</li>
                      <li>• International shipping available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedProduct.name}</h2>
                <button 
                  onClick={closeProductModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div>
                  <div className="relative mb-4">
                    <img 
                      src={selectedProduct.images[selectedImageIndex]} 
                      alt={selectedProduct.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    {selectedProduct.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnail Images */}
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {selectedProduct.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded border-2 ${selectedImageIndex === index ? 'border-gray-500' : 'border-gray-700'}`}
                      >
                        <img 
                          src={image} 
                          alt={`${selectedProduct.name} ${index + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div>
                  <p className="text-gray-400 mb-4">{selectedProduct.description}</p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-3xl font-bold text-white">${selectedProduct.price}</span>
                    {selectedProduct.originalPrice > selectedProduct.price && (
                      <span className="text-xl text-gray-500 line-through">${selectedProduct.originalPrice}</span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400">
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </span>
                  </div>

                  {/* Size Selector */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-1">Select Size:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size: string) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3 py-1 rounded border ${
                            selectedSize === size
                              ? "bg-green-600 text-white border-green-700"
                              : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
                          } font-semibold transition-all`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selector */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-1">Select Color:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.colors.map((color: string) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-3 py-1 rounded border ${
                            selectedColor === color
                              ? "bg-blue-700 text-white border-blue-500"
                              : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
                          } font-semibold transition-all`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Buy Now and Cart Controls */}
                  <div className="flex items-center space-x-4">
                    <button
                      className={`bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors ${
                        buyNowLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={buyNowLoading}
                      onClick={handleBuyNow}
                    >
                      {buyNowLoading ? "Processing..." : "Buy Now"}
                    </button>

                    {/* Existing Add to Cart/Favorite controls */}
                    {cart[selectedProduct.id] ? (
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => removeFromCart(selectedProduct.id)}
                          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold text-lg min-w-[2rem] text-center text-white">{cart[selectedProduct.id]}</span>
                        <button 
                          onClick={() => addToCart(selectedProduct.id)}
                          disabled={!selectedProduct.inStock}
                          className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white p-2 rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(selectedProduct.id)}
                        disabled={!selectedProduct.inStock}
                        className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        <span>{selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                      </button>
                    )}
                    
                    {/* Favorite button */}
                    <button
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites.includes(selectedProduct.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Checkout */}
      <FloatingCheckout 
        totalItems={getTotalItems()}
        totalPrice={getTotalPrice()}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        totalItems={getTotalItems()}
        totalPrice={getTotalPrice()}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
};

export default Store;

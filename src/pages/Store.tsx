import React, { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import FloatingCheckout from '../components/FloatingCheckout';
import { ShoppingCart, Plus, Minus, Search, Filter, Star, Heart, Truck, Shield, ArrowUpDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Store = () => {
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Digital Dreams Hoodie",
      price: 65,
      originalPrice: 85,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
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
    toast({
      title: "Proceeding to Checkout",
      description: `${getTotalItems()} items - Total: $${getTotalPrice()}`,
    });
    // Add checkout logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Store Header */}
        <div className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Official Store</h1>
            <p className="text-xl text-gray-300">Premium Music Merchandise & Apparel</p>
            <div className="flex items-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-green-400" />
                <span className="text-sm">Free shipping over $75</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
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
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <span className="text-gray-600">{filteredAndSortedProducts.length} products</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviews</option>
                  </select>
                </div>

                {/* Cart Summary */}
                <div className="bg-gray-50 rounded-lg p-3 min-w-[200px]">
                  <div className="flex items-center space-x-2 mb-1">
                    <ShoppingCart className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold text-gray-900">Cart ({getTotalItems()})</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">${getTotalPrice()}</p>
                  {getTotalItems() > 0 && (
                    <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg text-sm font-semibold transition-colors">
                      Checkout
                    </button>
                  )}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col space-y-2">
                        {product.bestseller && (
                          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            Bestseller
                          </span>
                        )}
                        {!product.inStock && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            Out of Stock
                          </span>
                        )}
                        {product.originalPrice > product.price && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            Sale
                          </span>
                        )}
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <Heart 
                          className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                        />
                      </button>

                      {/* Cart Count Badge */}
                      {cart[product.id] && (
                        <div className="absolute bottom-3 right-3 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {cart[product.id]}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      
                      {/* Sizes */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Available Sizes:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.map((size) => (
                            <span key={size} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
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
                              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-bold text-lg min-w-[2rem] text-center">{cart[product.id]}</span>
                            <button 
                              onClick={() => addToCart(product.id)}
                              disabled={!product.inStock}
                              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(product.id)}
                            disabled={!product.inStock}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
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
              <div className="bg-white rounded-lg shadow-sm p-8 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment & Shipping</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">Payment Methods</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• MTN Mobile Money</li>
                      <li>• Credit/Debit Cards</li>
                      <li>• Flutterwave Secure Payment</li>
                      <li>• PayPal (Coming Soon)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-4">Shipping Info</h3>
                    <ul className="space-y-2 text-gray-700">
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

      {/* Floating Checkout */}
      <FloatingCheckout 
        totalItems={getTotalItems()}
        totalPrice={getTotalPrice()}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Store;

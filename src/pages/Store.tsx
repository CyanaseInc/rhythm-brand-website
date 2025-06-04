
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

const Store = () => {
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const products = [
    {
      id: 1,
      name: "Digital Dreams Hoodie",
      price: 65,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Electronic Waves T-Shirt",
      price: 35,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 3,
      name: "Synth Logo Cap",
      price: 25,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
      sizes: ["One Size"]
    },
    {
      id: 4,
      name: "Bass Drop Zip Hoodie",
      price: 75,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 5,
      name: "Circuit Board Tank Top",
      price: 30,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 6,
      name: "Vinyl Record Tote Bag",
      price: 20,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      sizes: ["One Size"]
    }
  ];

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
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

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, count]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product ? product.price * count : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900">
      <Navigation />
      
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Store
            </h1>
            <p className="text-xl text-gray-300">Official Artist Merchandise</p>
          </div>
          
          {/* Cart Summary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[200px]">
            <div className="flex items-center space-x-2 mb-2">
              <ShoppingCart className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">Cart ({getTotalItems()})</span>
            </div>
            <p className="text-2xl font-bold text-green-400">${getTotalPrice()}</p>
            {getTotalItems() > 0 && (
              <button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full font-semibold transition-colors">
                Checkout
              </button>
            )}
          </div>
        </div>

        {/* Payment Notice */}
        <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 mb-8">
          <p className="text-blue-200 text-center">
            💳 We accept Mobile Money (MTN MoMo) and Card payments via Flutterwave
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {cart[product.id] && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {cart[product.id]}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-green-400 mb-4">${product.price}</p>
                
                {/* Sizes */}
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Available Sizes:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span key={size} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Add to Cart Controls */}
                <div className="flex items-center space-x-3">
                  {cart[product.id] ? (
                    <div className="flex items-center space-x-3 flex-1">
                      <button 
                        onClick={() => removeFromCart(product.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white font-bold text-lg">{cart[product.id]}</span>
                      <button 
                        onClick={() => addToCart(product.id)}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Payment & Shipping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-4">Payment Methods</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• MTN Mobile Money</li>
                <li>• Credit/Debit Cards</li>
                <li>• Flutterwave Secure Payment</li>
                <li>• PayPal (Coming Soon)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Shipping Info</h3>
              <ul className="space-y-2 text-gray-300">
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
  );
};

export default Store;

import React from "react";
import { Star, Heart, ChevronLeft, ChevronRight, ShoppingCart, Plus, Minus } from "lucide-react";

interface ProductModalProps {
  product: any;
  selectedImageIndex: number;
  setSelectedImageIndex: (idx: number) => void;
  selectedSize: string | null;
  setSelectedSize: (s: string) => void;
  selectedColor: string | null;
  setSelectedColor: (c: string) => void;
  cart: { [key: number]: number };
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  toggleFavorite: (id: number) => void;
  favorites: number[];
  close: () => void;
  buyNowLoading: boolean;
  handleBuyNow: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  selectedImageIndex,
  setSelectedImageIndex,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  cart,
  addToCart,
  removeFromCart,
  toggleFavorite,
  favorites,
  close,
  buyNowLoading,
  handleBuyNow,
  nextImage,
  prevImage,
}) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
            <button onClick={close} className="text-gray-400 hover:text-white text-2xl">×</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              <div className="relative mb-4">
                <img 
                  src={product.images[selectedImageIndex]} 
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                {product.images.length > 1 && (
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
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 ${selectedImageIndex === index ? 'border-gray-500' : 'border-gray-700'}`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Product Details */}
            <div>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl font-bold text-white">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              {/* Size Selector */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-1">Select Size:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
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
                  {product.colors.map((color: string) => (
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
                {cart[product.id] ? (
                  <div className="flex items-center space-x-2">
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
                    className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                  </button>
                )}
                {/* Favorite button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

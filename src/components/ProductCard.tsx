import React from "react";
import { ShoppingCart, Plus, Minus, Star, Heart } from "lucide-react";

interface ProductCardProps {
  product: any;
  cart: { [key: number]: number };
  favorites: number[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  toggleFavorite: (id: number) => void;
  onSelect: (product: any) => void;
  selectedColor: string | null;
  setColor: (id: number, color: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  cart,
  favorites,
  addToCart,
  removeFromCart,
  toggleFavorite,
  onSelect,
  selectedColor,
  setColor,
}) => (
  <div className="bg-gray-900 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
    <div className="relative">
      <img 
        src={product.images[0]} 
        alt={product.name}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
        onClick={() => onSelect(product)}
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
          {product.sizes.map((size: string) => (
            <span key={size} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
              {size}
            </span>
          ))}
        </div>
      </div>
      {/* Color Selector */}
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-2">Available Colors:</p>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color: string) => (
            <button
              key={color}
              onClick={(e) => {
                e.stopPropagation();
                setColor(product.id, color);
              }}
              className={`px-3 py-1 rounded border transition-all text-xs font-medium
                ${selectedColor === color
                  ? "bg-blue-700 text-white border-blue-500"
                  : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"}
              `}
              style={{
                // Optionally, add colored dots for more visual color-coding:
                outline: selectedColor === color ? "2px solid #60a5fa" : undefined,
              }}
            >
              {color}
            </button>
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
);

export default ProductCard;

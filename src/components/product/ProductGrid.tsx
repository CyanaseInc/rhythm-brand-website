import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";

interface ProductGridProps {
  viewMode: 'grid' | 'list';
  category: string;
}

const ProductGrid = ({ viewMode, category }: ProductGridProps) => {
  const { addItem } = useCartStore();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Mock product data
  const products = [
    {
      id: "1",
      name: "Silk Slip Dress",
      brand: "Reformation",
      price: 248,
      originalPrice: 298,
      images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop"
      ],
      rating: 4.8,
      reviews: 124,
      isNew: true,
      colors: ["Black", "Ivory", "Red"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: "2",
      name: "Oversized Blazer",
      brand: "Ganni",
      price: 395,
      images: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop"
      ],
      rating: 4.6,
      reviews: 89,
      isNew: false,
      colors: ["Beige", "Black", "Navy"],
      sizes: ["XS", "S", "M", "L"],
    },
    {
      id: "3",
      name: "High-Waist Jeans",
      brand: "Citizens of Humanity",
      price: 198,
      images: [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop"
      ],
      rating: 4.9,
      reviews: 256,
      isNew: false,
      colors: ["Blue", "Black", "White"],
      sizes: ["24", "25", "26", "27", "28", "29", "30"],
    },
    {
      id: "4",
      name: "Cashmere Sweater",
      brand: "Everlane",
      price: 168,
      originalPrice: 198,
      images: [
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop"
      ],
      rating: 4.7,
      reviews: 178,
      isNew: true,
      colors: ["Cream", "Black", "Gray", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    // Add more products...
  ];

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleQuickAdd = (product: any) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
  };

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-6 flex gap-6 hover:shadow-lg transition-shadow">
            <div className="relative w-48 h-64 flex-shrink-0">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              {product.isNew && (
                <Badge className="absolute top-3 left-3 bg-black text-white">
                  New
                </Badge>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
                  <h3 className="text-lg font-medium mb-2">
                    <Link to={`/product/${product.id}`} className="hover:underline">
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart 
                    className={`h-5 w-5 ${
                      favorites.has(product.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-400'
                    }`} 
                  />
                </Button>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600 ml-1">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-xl">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <Button onClick={() => handleQuickAdd(product)}>
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Quick Add
                </Button>
                <div className="text-sm text-gray-600">
                  {product.colors.length} colors • {product.sizes.length} sizes
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            
            {product.isNew && (
              <Badge className="absolute top-3 left-3 bg-black text-white">
                New
              </Badge>
            )}
            
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-3 right-3 bg-white/80 hover:bg-white"
              onClick={() => toggleFavorite(product.id)}
            >
              <Heart 
                className={`h-4 w-4 ${
                  favorites.has(product.id) 
                    ? 'fill-red-500 text-red-500' 
                    : 'text-gray-600'
                }`} 
              />
            </Button>
            
            {/* Quick Add Button */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button 
                className="w-full"
                onClick={() => handleQuickAdd(product)}
              >
                Quick Add
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
            <h3 className="font-medium mb-2 line-clamp-2">
              <Link to={`/product/${product.id}`} className="hover:underline">
                {product.name}
              </Link>
            </h3>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600 ml-1">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-lg">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-sm">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <div className="text-xs text-gray-500">
              {product.colors.length} colors • {product.sizes.length} sizes
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
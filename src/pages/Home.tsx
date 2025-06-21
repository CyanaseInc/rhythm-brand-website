import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Heart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const Home = () => {
  const { addItem } = useCartStore();

  const featuredProducts = [
    {
      id: "1",
      name: "Silk Slip Dress",
      brand: "Reformation",
      price: 248,
      originalPrice: 298,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      rating: 4.8,
      reviews: 124,
      isNew: true,
    },
    {
      id: "2",
      name: "Oversized Blazer",
      brand: "Ganni",
      price: 395,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      rating: 4.6,
      reviews: 89,
      isNew: false,
    },
    {
      id: "3",
      name: "High-Waist Jeans",
      brand: "Citizens of Humanity",
      price: 198,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 256,
      isNew: false,
    },
    {
      id: "4",
      name: "Cashmere Sweater",
      brand: "Everlane",
      price: 168,
      originalPrice: 198,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
      rating: 4.7,
      reviews: 178,
      isNew: true,
    },
  ];

  const handleAddToCart = (product: any) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            New Season
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              New Style
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover the latest fashion trends and curated collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/women">Shop Women</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-gray-900">
              <Link to="/men">Shop Men</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Women",
                subtitle: "Latest trends & designer pieces",
                image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop",
                link: "/women"
              },
              {
                title: "Men",
                subtitle: "Contemporary & streetwear",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
                link: "/men"
              },
              {
                title: "Beauty",
                subtitle: "Luxury & clean beauty",
                image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop",
                link: "/beauty"
              }
            ].map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] block"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200 mb-4">{category.subtitle}</p>
                  <div className="flex items-center text-sm font-medium">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Trending Now</h2>
            <Button variant="outline" asChild>
              <Link to="/women/new">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-3 left-3 bg-black text-white">
                      New
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  
                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      className="w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-1">{product.brand}</p>
                  <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive offers, and style inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button className="bg-white text-black hover:bg-gray-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
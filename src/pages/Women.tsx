import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";

const Women = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const location = useLocation();

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Women', href: '/women' },
  ];

  const categories = [
    { name: 'New Arrivals', href: '/women/new', count: 245 },
    { name: 'Dresses', href: '/women/dresses', count: 189 },
    { name: 'Tops', href: '/women/tops', count: 156 },
    { name: 'Bottoms', href: '/women/bottoms', count: 134 },
    { name: 'Outerwear', href: '/women/outerwear', count: 78 },
    { name: 'Shoes', href: '/women/shoes', count: 167 },
    { name: 'Bags', href: '/women/bags', count: 89 },
    { name: 'Accessories', href: '/women/accessories', count: 123 },
    { name: 'Sale', href: '/women/sale', count: 234 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-pink-500 to-purple-600">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=400&fit=crop')"
          }}
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Women</h1>
            <p className="text-xl">Discover the latest trends and timeless pieces</p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <div key={item.name} className="flex items-center">
              <Link to={item.href} className="text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            {/* Categories */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                      location.pathname === category.href
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Filters */}
            <div className={`bg-white rounded-lg p-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <ProductFilters />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <span className="text-sm text-gray-600">
                  Showing 1,234 products
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <Routes>
              <Route path="/*" element={<ProductGrid viewMode={viewMode} category="women" />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Women;
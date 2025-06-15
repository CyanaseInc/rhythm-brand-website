
import React from "react";
import { Search } from "lucide-react";

interface StoreSidebarProps {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  categories: {id: string, name: string, count: number}[];
  priceRange: number[];
  setPriceRange: (r: number[]) => void;
}

const StoreSidebar: React.FC<StoreSidebarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  priceRange,
  setPriceRange,
}) => (
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
);

export default StoreSidebar;

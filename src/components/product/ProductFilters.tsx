import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const ProductFilters = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['price', 'brand', 'size', 'color'])
  );
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [selectedSizes, setSelectedSizes] = useState<Set<string>>(new Set());
  const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const toggleFilter = (
    value: string, 
    selectedSet: Set<string>, 
    setSelectedSet: (set: Set<string>) => void
  ) => {
    const newSet = new Set(selectedSet);
    if (newSet.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    setSelectedSet(newSet);
  };

  const clearAllFilters = () => {
    setPriceRange([0, 500]);
    setSelectedBrands(new Set());
    setSelectedSizes(new Set());
    setSelectedColors(new Set());
  };

  const getActiveFilterCount = () => {
    return selectedBrands.size + selectedSizes.size + selectedColors.size + 
           (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0);
  };

  const brands = [
    "Reformation", "Ganni", "Citizens of Humanity", "Everlane", 
    "Staud", "Jacquemus", "The Row", "Khaite", "Toteme", "Acne Studios"
  ];

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  
  const colors = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Gray", value: "#808080" },
    { name: "Navy", value: "#000080" },
    { name: "Brown", value: "#8B4513" },
    { name: "Beige", value: "#F5F5DC" },
    { name: "Red", value: "#FF0000" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#008000" },
  ];

  const FilterSection = ({ 
    title, 
    children, 
    sectionKey 
  }: { 
    title: string; 
    children: React.ReactNode; 
    sectionKey: string;
  }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left font-medium mb-3"
      >
        {title}
        {expandedSections.has(sectionKey) ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {expandedSections.has(sectionKey) && children}
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold">Filters</h3>
        {getActiveFilterCount() > 0 && (
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{getActiveFilterCount()}</Badge>
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          </div>
        )}
      </div>

      {/* Price Range */}
      <FilterSection title="Price" sectionKey="price">
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brand" sectionKey="brand">
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.has(brand)}
                onCheckedChange={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Sizes */}
      <FilterSection title="Size" sectionKey="size">
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={selectedSizes.has(size) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
              className="h-8"
            >
              {size}
            </Button>
          ))}
        </div>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Color" sectionKey="color">
        <div className="grid grid-cols-5 gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleFilter(color.name, selectedColors, setSelectedColors)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColors.has(color.name) 
                  ? 'border-gray-900 ring-2 ring-gray-300' 
                  : 'border-gray-300'
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

export default ProductFilters;
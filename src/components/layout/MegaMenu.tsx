import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface Category {
  name: string;
  path: string;
}

interface MegaMenuProps {
  category: Category;
}

const MegaMenu = ({ category }: MegaMenuProps) => {
  const getSubCategories = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "women":
        return {
          clothing: [
            { name: "New Arrivals", path: "/women/new" },
            { name: "Dresses", path: "/women/dresses" },
            { name: "Tops", path: "/women/tops" },
            { name: "Bottoms", path: "/women/bottoms" },
            { name: "Outerwear", path: "/women/outerwear" },
            { name: "Activewear", path: "/women/activewear" },
          ],
          accessories: [
            { name: "Shoes", path: "/women/shoes" },
            { name: "Bags", path: "/women/bags" },
            { name: "Jewelry", path: "/women/jewelry" },
            { name: "Sunglasses", path: "/women/sunglasses" },
          ],
          brands: [
            { name: "Designer", path: "/women/designer" },
            { name: "Contemporary", path: "/women/contemporary" },
            { name: "Curated", path: "/women/curated" },
          ],
          sale: [
            { name: "Sale", path: "/women/sale" },
            { name: "Under $50", path: "/women/under-50" },
            { name: "Under $100", path: "/women/under-100" },
          ],
        };
      case "men":
        return {
          clothing: [
            { name: "New Arrivals", path: "/men/new" },
            { name: "Shirts", path: "/men/shirts" },
            { name: "T-Shirts", path: "/men/tshirts" },
            { name: "Pants", path: "/men/pants" },
            { name: "Outerwear", path: "/men/outerwear" },
            { name: "Activewear", path: "/men/activewear" },
          ],
          accessories: [
            { name: "Shoes", path: "/men/shoes" },
            { name: "Bags", path: "/men/bags" },
            { name: "Watches", path: "/men/watches" },
            { name: "Sunglasses", path: "/men/sunglasses" },
          ],
          brands: [
            { name: "Designer", path: "/men/designer" },
            { name: "Contemporary", path: "/men/contemporary" },
            { name: "Streetwear", path: "/men/streetwear" },
          ],
          sale: [
            { name: "Sale", path: "/men/sale" },
            { name: "Under $75", path: "/men/under-75" },
            { name: "Under $150", path: "/men/under-150" },
          ],
        };
      case "beauty":
        return {
          makeup: [
            { name: "New Arrivals", path: "/beauty/new" },
            { name: "Face", path: "/beauty/face" },
            { name: "Eyes", path: "/beauty/eyes" },
            { name: "Lips", path: "/beauty/lips" },
            { name: "Tools", path: "/beauty/tools" },
          ],
          skincare: [
            { name: "Cleansers", path: "/beauty/cleansers" },
            { name: "Moisturizers", path: "/beauty/moisturizers" },
            { name: "Serums", path: "/beauty/serums" },
            { name: "Sunscreen", path: "/beauty/sunscreen" },
          ],
          fragrance: [
            { name: "Women's", path: "/beauty/fragrance-women" },
            { name: "Men's", path: "/beauty/fragrance-men" },
            { name: "Unisex", path: "/beauty/fragrance-unisex" },
          ],
          brands: [
            { name: "Luxury", path: "/beauty/luxury" },
            { name: "Clean Beauty", path: "/beauty/clean" },
            { name: "K-Beauty", path: "/beauty/k-beauty" },
          ],
        };
      default:
        return {};
    }
  };

  const subCategories = getSubCategories(category.name);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium">
            {category.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-4 gap-8 p-8 w-[800px]">
              {Object.entries(subCategories).map(([sectionName, items]) => (
                <div key={sectionName}>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 mb-4">
                    {sectionName}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.path}
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MegaMenu;
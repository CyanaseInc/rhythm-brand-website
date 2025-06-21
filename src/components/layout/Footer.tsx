import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">REVOLVE</h3>
            <p className="text-gray-600 text-sm mb-4">
              Discover the latest fashion trends and curated collections from top designers and emerging brands.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-gray-900">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-gray-900">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide" className="text-gray-600 hover:text-gray-900">Size Guide</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-gray-900">Press</Link></li>
              <li><Link to="/sustainability" className="text-gray-600 hover:text-gray-900">Sustainability</Link></li>
              <li><Link to="/affiliates" className="text-gray-600 hover:text-gray-900">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest updates on new arrivals, exclusive offers, and style inspiration.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4 md:mb-0">
            <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-gray-900">Accessibility</Link>
            <Link to="/cookies" className="hover:text-gray-900">Cookie Policy</Link>
          </div>
          <p className="text-sm text-gray-600">
            © 2024 REVOLVE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
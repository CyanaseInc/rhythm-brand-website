import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/search">
              <Search className="h-5 w-5 mr-2" />
              Search Products
            </Link>
          </Button>
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/women" className="text-sm text-gray-600 hover:text-gray-900 underline">
              Women
            </Link>
            <Link to="/men" className="text-sm text-gray-600 hover:text-gray-900 underline">
              Men
            </Link>
            <Link to="/beauty" className="text-sm text-gray-600 hover:text-gray-900 underline">
              Beauty
            </Link>
            <Link to="/women/sale" className="text-sm text-gray-600 hover:text-gray-900 underline">
              Sale
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
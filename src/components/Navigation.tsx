
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'THE CROP', path: '/music' },
    { name: 'FIELD NOTES', path: '/biography' },
    { name: 'SCARECROW\'S CLOSET', path: '/store' },
    { name: 'FOOTPRINTS', path: '/events' },
    { name: 'WHISPERS', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Don't render on home page since hero has its own nav
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="fixed top-0 w-full bg-[#1A1A1A]/90 backdrop-blur-sm z-50 border-b border-[#D4B896]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Natural Icons - Left */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-[#D4B896] rounded-full flex items-center justify-center hover:bg-[#C4975A] transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">🌾</span>
            </div>
            <div className="w-5 h-5 md:w-6 md:h-6 bg-[#D4B896] rounded-full flex items-center justify-center hover:bg-[#C4975A] transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">🌙</span>
            </div>
            <div className="w-5 h-5 md:w-6 md:h-6 bg-[#D4B896] rounded-full flex items-center justify-center hover:bg-[#C4975A] transition-all duration-300 hover:scale-110">
              <span className="text-[#1A1A1A] text-xs font-bold">🔥</span>
            </div>
          </div>

          {/* Logo - Center */}
          <Link to="/" className="text-[#F5E6D3] text-lg md:text-2xl font-bold font-serif">
            dimitri<span className="text-[#C4975A]">&</span>scarecrow
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs lg:text-sm font-semibold tracking-wider transition-all duration-300 hover:scale-110 font-serif ${
                  isActive(item.path)
                    ? 'text-[#C4975A]'
                    : 'text-[#F5E6D3] hover:text-[#C4975A]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Search className="w-4 h-4 lg:w-5 lg:h-5 text-[#F5E6D3] hover:text-[#C4975A] cursor-pointer transition-all duration-300 hover:scale-110" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F5E6D3] hover:text-[#C4975A] p-2 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1A1A1A]/95 rounded-lg mt-2 border border-[#D4B896]/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 tracking-wider font-serif ${
                    isActive(item.path)
                      ? 'text-[#C4975A] bg-[#C4975A]/10'
                      : 'text-[#F5E6D3] hover:text-[#C4975A] hover:bg-[#F5E6D3]/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;


import React from 'react';
import { ShoppingCart, CreditCard } from 'lucide-react';

interface FloatingCheckoutProps {
  totalItems: number;
  totalPrice: number;
  onCheckout: () => void;
}

const FloatingCheckout = ({ totalItems, totalPrice, onCheckout }: FloatingCheckoutProps) => {
  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2 duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-2xl border border-blue-500/20 backdrop-blur-sm">
        <div className="px-6 py-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">Cart Total</p>
              <p className="text-xl font-bold">${totalPrice}</p>
            </div>
          </div>
          
          <button 
            onClick={onCheckout}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <CreditCard className="w-5 h-5" />
            <span>Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCheckout;

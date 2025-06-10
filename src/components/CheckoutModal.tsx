
import React, { useState } from 'react';
import { X, CreditCard, Truck, Shield, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalItems: number;
  totalPrice: number;
  onOrderComplete: () => void;
}

const CheckoutModal = ({ isOpen, onClose, totalItems, totalPrice, onOrderComplete }: CheckoutModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleComplete = () => {
    // Simulate order processing
    setTimeout(() => {
      onOrderComplete();
      onClose();
      setStep(1);
      setFormData({
        email: '', firstName: '', lastName: '', address: '', city: '',
        postalCode: '', country: '', cardNumber: '', expiryDate: '', cvv: '', cardName: ''
      });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#2A2317] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D4B896]/20">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#D4B896]/20">
          <h2 className="text-2xl font-bold text-[#F5E6D3] font-serif">
            {step === 1 && "Shipping Information"}
            {step === 2 && "Payment Details"}
            {step === 3 && "Order Confirmation"}
          </h2>
          <button
            onClick={onClose}
            className="text-[#F5E6D3] hover:text-[#C4975A] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center py-4 border-b border-[#D4B896]/20">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                step >= stepNum ? 'bg-[#C4975A] text-[#F5E6D3]' : 'bg-[#F5E6D3]/20 text-[#D4B896]'
              }`}>
                {step > stepNum ? <Check className="w-4 h-4" /> : stepNum}
              </div>
              {stepNum < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  step > stepNum ? 'bg-[#C4975A]' : 'bg-[#F5E6D3]/20'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="p-6">
          {/* Step 1: Shipping */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
                />
                <div></div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] focus:border-[#C4975A] focus:outline-none"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="space-y-4">
              <input
                type="text"
                name="cardName"
                placeholder="Name on Card"
                value={formData.cardName}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
              />
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#F5E6D3]/10 border border-[#D4B896]/30 rounded-lg text-[#F5E6D3] placeholder-[#D4B896] focus:border-[#C4975A] focus:outline-none"
                />
              </div>
              
              <div className="flex items-center space-x-2 text-[#D4B896] text-sm">
                <Shield className="w-4 h-4" />
                <span>Your payment information is secure and encrypted</span>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-[#C4975A] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-[#F5E6D3]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F5E6D3] mb-2 font-serif">Order Summary</h3>
                <p className="text-[#D4B896]">{totalItems} items • ${totalPrice}</p>
              </div>
              <div className="bg-[#F5E6D3]/10 rounded-lg p-4 space-y-2 text-left">
                <div className="flex items-center space-x-2 text-[#D4B896]">
                  <Truck className="w-4 h-4" />
                  <span>Estimated delivery: 3-5 business days</span>
                </div>
                <div className="flex items-center space-x-2 text-[#D4B896]">
                  <CreditCard className="w-4 h-4" />
                  <span>Payment method: •••• {formData.cardNumber.slice(-4)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Order Total */}
          <div className="mt-6 p-4 bg-[#F5E6D3]/10 rounded-lg">
            <div className="flex justify-between items-center text-[#F5E6D3] font-semibold">
              <span>Total ({totalItems} items)</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 py-3 px-6 border border-[#D4B896]/30 text-[#F5E6D3] rounded-lg hover:bg-[#F5E6D3]/10 transition-colors font-serif"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className="flex-1 py-3 px-6 bg-[#C4975A] hover:bg-[#8B7355] text-[#F5E6D3] rounded-lg transition-colors font-serif"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleComplete}
                className="flex-1 py-3 px-6 bg-[#C4975A] hover:bg-[#8B7355] text-[#F5E6D3] rounded-lg transition-colors font-serif"
              >
                Complete Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;

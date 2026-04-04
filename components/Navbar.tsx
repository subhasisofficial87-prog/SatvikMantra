'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/images/satvik-mantra-logo.png"
              alt="Satvik Mantra Logo"
              className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="hidden sm:inline font-serif text-lg font-bold text-[#2F4F2F]">Satvik Mantra</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-800 hover:text-[#556B2F] transition-colors duration-300 font-medium">Home</Link>
            <Link href="/products" className="text-gray-800 hover:text-[#556B2F] transition-colors duration-300 font-medium">Products</Link>
            <Link href="/about" className="text-gray-800 hover:text-[#556B2F] transition-colors duration-300 font-medium">About Us</Link>
            <Link href="/cart" className="bg-[#556B2F] text-white px-4 py-2 rounded-lg hover:bg-[#2F4F2F] flex items-center space-x-2 transition-colors duration-300">
              <ShoppingCart size={18} />
              <span>Cart</span>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-800 hover:text-[#556B2F] transition-colors duration-300">Home</Link>
            <Link href="/products" className="block py-2 text-gray-800 hover:text-[#556B2F] transition-colors duration-300">Products</Link>
            <Link href="/about" className="block py-2 text-gray-800 hover:text-[#556B2F] transition-colors duration-300">About Us</Link>
            <Link href="/cart" className="block py-2 bg-[#556B2F] text-white px-4 rounded-lg hover:bg-[#2F4F2F] transition-colors duration-300">Cart</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

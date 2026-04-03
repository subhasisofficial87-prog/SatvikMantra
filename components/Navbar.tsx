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
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#556B2F] to-[#2F4F2F] flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="hidden sm:inline font-serif text-xl font-bold text-[#2F4F2F]">Satvik Mantra</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-[#556B2F]">Home</Link>
            <Link href="/products" className="hover:text-[#556B2F]">Products</Link>
            <Link href="/blog" className="hover:text-[#556B2F]">Blog</Link>
            <Link href="/cart" className="bg-[#556B2F] text-white px-4 py-2 rounded-lg hover:bg-[#2F4F2F] flex items-center space-x-2">
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
            <Link href="/" className="block py-2 hover:text-[#556B2F]">Home</Link>
            <Link href="/products" className="block py-2 hover:text-[#556B2F]">Products</Link>
            <Link href="/blog" className="block py-2 hover:text-[#556B2F]">Blog</Link>
            <Link href="/cart" className="block py-2 bg-[#556B2F] text-white px-4 rounded-lg">Cart</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

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
              src="https://imgur.com/placeholder.png"
              alt="Satvik Mantra Logo"
              className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Ccircle cx=%22100%22 cy=%22100%22 r=%2295%22 fill=%22%23556B2F%22/%3E%3Cpath d=%22M100 40 L140 160 L60 160 Z%22 fill=%22%23F5F5DC%22/%3E%3C/svg%3E';
              }}
            />
            <span className="hidden sm:inline font-serif text-lg font-bold text-[#2F4F2F]">Satvik Mantra</span>
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

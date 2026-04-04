'use client';
import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2F4F2F] text-[#F5F5DC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://imgur.com/placeholder.png"
                alt="Satvik Mantra Logo"
                className="h-8 w-8 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="font-serif text-xl font-bold">Satvik Mantra</h3>
            </div>
            <p className="text-sm">Pure oils, ancient wisdom</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about">About Us</a></li>
              <li><a href="#why">Why Choose Us</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="https://wa.me/919876543210">WhatsApp Us</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@satvikmantra.com">Email</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#556B2F] mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Satvik Mantra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

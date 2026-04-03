'use client';
import { useEffect, useState } from 'react';
import CartSidebar from '@/components/CartSidebar';
import { CartItem } from '@/types';
import Link from 'next/link';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
    setMounted(true);
  }, []);

  const handleRemove = (productId: string) => {
    const updated = cart.filter((item) => item.productId !== productId);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  if (!mounted) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-[#2F4F2F] mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">Your cart is empty</p>
                <Link href="/products" className="inline-block bg-[#556B2F] text-white px-6 py-2 rounded-lg">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.productId} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                    <img src={item.image || 'https://via.placeholder.com/100'} alt={item.name} className="w-24 h-24 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2F4F2F]">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#556B2F] mb-2">₹{(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={() => handleRemove(item.productId)} className="text-red-600 hover:text-red-800">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#F5F5DC] p-6 rounded-lg h-fit">
            <CartSidebar items={cart} onRemove={handleRemove} />
          </div>
        </div>
      </div>
    </div>
  );
}

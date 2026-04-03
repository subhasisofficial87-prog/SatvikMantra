'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CartItem } from '@/types';
import { calculateSubtotal, calculateShipping, calculateTotal } from '@/lib/utils';

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const subtotal = calculateSubtotal(cart);
  const shipping = calculateShipping(subtotal);
  const total = calculateTotal(subtotal, shipping);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const order = {
        ...form,
        items: cart,
        totalPrice: total,
        status: 'completed',
        createdAt: new Date(),
      };

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });

      if (res.ok) {
        localStorage.removeItem('cart');
        const data = await res.json();
        router.push(`/order-confirmation/${data._id}`);
      }
    } catch (error) {
      alert('Payment failed. Please try again.');
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <a href="/products" className="text-[#556B2F] hover:underline">Continue Shopping</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-[#2F4F2F] mb-12">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="font-bold text-lg text-[#2F4F2F] mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#556B2F]" />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#556B2F]" />
                <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#556B2F]" />
                <input type="text" placeholder="City" value={form.city} onChange={(e) => setForm({...form, city: e.target.value})} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#556B2F]" />
                <input type="text" placeholder="Address" value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#556B2F] md:col-span-2" />
                <input type="text" placeholder="Postal Code" value={form.postalCode} onChange={(e) => setForm({...form, postalCode: e.target.value})} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#556B2F]" />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="font-bold text-lg text-[#2F4F2F] mb-4">Payment (Mock Demo)</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Card Number" value={form.cardNumber} onChange={(e) => setForm({...form, cardNumber: e.target.value})} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#556B2F]" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM/YY" value={form.cardExpiry} onChange={(e) => setForm({...form, cardExpiry: e.target.value})} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#556B2F]" />
                  <input type="text" placeholder="CVV" value={form.cardCVV} onChange={(e) => setForm({...form, cardCVV: e.target.value})} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#556B2F]" />
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-[#556B2F] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#2F4F2F] disabled:opacity-50">
              {loading ? 'Processing...' : 'Complete Purchase'}
            </button>
          </form>

          <div className="bg-[#F5F5DC] p-6 rounded-lg h-fit">
            <h2 className="font-bold text-lg text-[#2F4F2F] mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.productId} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t-2 pt-4 space-y-2">
              <div className="flex justify-between"><span>Subtotal:</span><span>₹{subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping:</span><span>₹{shipping.toFixed(2)}</span></div>
              <div className="flex justify-between text-lg font-bold text-[#556B2F]"><span>Total:</span><span>₹{total.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

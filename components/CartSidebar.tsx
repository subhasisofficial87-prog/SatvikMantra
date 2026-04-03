'use client';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { CartItem } from '@/types';
import { formatPrice, calculateSubtotal, calculateShipping, calculateTotal } from '@/lib/utils';

interface Props {
  items: CartItem[];
  onRemove: (productId: string) => void;
}

export default function CartSidebar({ items, onRemove }: Props) {
  const subtotal = calculateSubtotal(items);
  const shipping = calculateShipping(subtotal);
  const total = calculateTotal(subtotal, shipping);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Your cart is empty</p>
        <Link href="/products" className="inline-block bg-[#556B2F] text-white px-6 py-2 rounded-lg">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.productId} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
          <div className="flex-1">
            <p className="font-semibold text-[#2F4F2F]">{item.name}</p>
            <p className="text-sm text-gray-600">{item.quantity} x {formatPrice(item.price)}</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="font-bold text-[#556B2F]">{formatPrice(item.price * item.quantity)}</p>
            <button onClick={() => onRemove(item.productId)} className="text-red-600 hover:text-red-800">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}

      <div className="border-t-2 pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal:</span>
          <span className="font-semibold">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Shipping:</span>
          <span className="font-semibold">{formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-[#556B2F]">
          <span>Total:</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>

      <Link href="/checkout" className="block w-full bg-[#556B2F] text-white py-3 rounded-lg text-center font-bold hover:bg-[#2F4F2F]">
        Proceed to Checkout
      </Link>
    </div>
  );
}

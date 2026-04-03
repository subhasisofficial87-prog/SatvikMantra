'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmationPage() {
  const params = useParams();
  const orderId = params?.orderId;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle size={80} className="text-green-600" />
        </div>

        <h1 className="font-serif text-4xl font-bold text-[#2F4F2F] mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 text-lg mb-6">Thank you for your purchase. Your order has been successfully placed.</p>

        <div className="bg-[#F5F5DC] p-8 rounded-lg mb-8">
          <p className="text-gray-700 mb-2">Your Order Number</p>
          <p className="font-serif text-3xl font-bold text-[#556B2F] mb-6">{orderId}</p>

          <div className="text-left bg-white p-6 rounded-lg">
            <h3 className="font-bold text-[#2F4F2F] mb-4">What's Next?</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ We'll send you an email confirmation shortly</li>
              <li>✓ Your order will be shipped within 2-3 business days</li>
              <li>✓ Track your shipment via email updates</li>
              <li>✓ Need help? Contact us on WhatsApp anytime</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="bg-[#556B2F] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#2F4F2F]">
            Continue Shopping
          </Link>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="border-2 border-[#556B2F] text-[#556B2F] px-8 py-3 rounded-lg font-bold hover:bg-[#556B2F] hover:text-white">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

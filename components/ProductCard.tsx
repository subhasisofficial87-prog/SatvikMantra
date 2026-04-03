'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { Product } from '@/types';

interface Props {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <Link href={`/products/${product._id}`}>
        <div className="relative h-48 w-full bg-gray-100">
          <img
            src={product.image || 'https://via.placeholder.com/400x400?text=Product'}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product._id}`}>
          <h3 className="font-serif text-lg font-bold text-[#2F4F2F] hover:text-[#556B2F]">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-[#556B2F]">{formatPrice(product.price)}</span>
          <button
            onClick={() => onAddToCart?.(product)}
            className="bg-[#556B2F] text-white p-2 rounded-lg hover:bg-[#2F4F2F]"
          >
            <ShoppingCart size={20} />
          </button>
        </div>

        {product.stock <= 5 && product.stock > 0 && (
          <p className="text-red-600 text-xs mt-2">Only {product.stock} left!</p>
        )}
        {product.stock === 0 && (
          <p className="text-red-600 text-xs mt-2">Out of Stock</p>
        )}
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';
import { ShoppingCart, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatPrice } from '@/lib/utils';
import { Product } from '@/types';

interface Props {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Image Container */}
        <Link href={`/products/${product._id}`} className="relative h-56 w-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden group">
          <motion.img
            src={product.image || 'https://via.placeholder.com/400x400?text=Product'}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.4 }}
          />

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/30 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="text-white font-bold text-sm"
            >
              View Details
            </motion.div>
          </motion.div>

          {/* Badge */}
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              Low Stock
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              Out of Stock
            </div>
          )}
        </Link>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <Link href={`/products/${product._id}`}>
            <h3 className="font-serif text-xl font-bold text-[#2F4F2F] hover:text-[#556B2F] transition mb-2 line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {product.description}
          </p>

          {/* Benefits tag */}
          <div className="flex items-center gap-2 mb-4 text-xs text-[#556B2F]">
            <Leaf size={14} />
            <span>{product.extractionMethod}</span>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-[#556B2F] to-[#8B5E3C] bg-clip-text text-transparent"
            >
              {formatPrice(product.price)}
            </motion.span>

            <motion.button
              onClick={() => onAddToCart?.(product)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={product.stock === 0}
              className="bg-gradient-to-r from-[#556B2F] to-[#2F4F2F] text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

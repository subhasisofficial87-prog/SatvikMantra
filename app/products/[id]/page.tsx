'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`/api/products/${id}`);
          if (res.ok) setProduct(await res.json());
        } catch (error) {
          console.error('Failed to fetch product:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: any) => item.productId === product._id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${quantity} x ${product.name} added to cart!`);
    setQuantity(1);
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" className="text-[#556B2F] hover:text-[#2F4F2F] mb-8">← Back to Products</Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={product.image || 'https://via.placeholder.com/400x400'} alt={product.name} className="w-full h-96 object-cover" />
          </div>

          <div>
            <h1 className="font-serif text-4xl font-bold text-[#2F4F2F] mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-[#556B2F] mb-6">{formatPrice(product.price)}</p>
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            <div className="bg-[#F5F5DC] p-6 rounded-lg mb-6">
              <h3 className="font-bold text-[#2F4F2F] mb-3 flex items-center space-x-2">
                <Leaf size={20} className="text-[#556B2F]" />
                <span>Ayurvedic Benefits</span>
              </h3>
              <p className="text-gray-700">{product.benefits}</p>
            </div>

            <p className="text-gray-600 mb-6"><strong>Extraction Method:</strong> {product.extractionMethod}</p>

            {product.stock > 0 ? (
              <>
                <div className="flex items-center space-x-4 mb-6">
                  <label className="font-bold">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-[#556B2F]">−</button>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-16 text-center border-none focus:outline-none" min="1" max={product.stock} />
                    <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))} className="px-4 py-2 text-[#556B2F]">+</button>
                  </div>
                </div>

                <button onClick={handleAddToCart} className="w-full bg-[#556B2F] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#2F4F2F]">
                  Add to Cart
                </button>
              </>
            ) : (
              <p className="text-red-600 text-lg font-bold">Out of Stock</p>
            )}

            <p className="text-gray-600 mt-4">{product.stock} in stock</p>
          </div>
        </div>
      </div>
    </div>
  );
}

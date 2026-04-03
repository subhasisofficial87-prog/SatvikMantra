import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#F5F5DC] to-[#C2A878] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2F4F2F] mb-6">
              Pure Oils, <span className="text-[#556B2F]">Ancient Wisdom</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Handcrafted cold-pressed oils and desi ghee made with traditional methods. Pure, organic, and blessed with Ayurvedic benefits.
            </p>
            <div className="flex space-x-4">
              <Link href="/products" className="bg-[#556B2F] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#2F4F2F]">
                Shop Now
              </Link>
              <Link href="/blog" className="border-2 border-[#556B2F] text-[#556B2F] px-8 py-4 rounded-lg font-bold hover:bg-[#556B2F] hover:text-white">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-96 bg-white rounded-lg shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587849212617-d2acd65d6de7?w=600&h=400&fit=crop"
              alt="Oils"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Droplet } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#C2A878] to-[#D4AF9F] py-20 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 text-[#556B2F] opacity-20"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <Leaf size={120} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-5 text-[#2F4F2F] opacity-15"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Droplet size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-[#556B2F]/10 text-[#556B2F] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✨ Premium Wellness
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-6xl md:text-7xl font-bold text-[#2F4F2F] mb-6 leading-tight"
            >
              Pure Oils, <br />
              <span className="bg-gradient-to-r from-[#556B2F] to-[#8B5E3C] bg-clip-text text-transparent">
                Ancient Wisdom
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg"
            >
              Handcrafted cold-pressed oils and desi ghee made with traditional methods. Pure, organic, and blessed with Ayurvedic benefits for your wellness journey.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="inline-block bg-gradient-to-r from-[#556B2F] to-[#2F4F2F] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Shop Now →
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/blog"
                  className="inline-block border-2 border-[#556B2F] text-[#556B2F] px-8 py-4 rounded-xl font-bold hover:bg-[#556B2F] hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-8 text-sm text-gray-700"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#556B2F]/20 rounded-lg flex items-center justify-center">
                  ✓
                </div>
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#556B2F]/20 rounded-lg flex items-center justify-center">
                  ✓
                </div>
                <span>Cold Pressed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-96"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative h-full"
            >
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1587849212617-d2acd65d6de7?w=600&h=600&fit=crop"
                  alt="Premium Oils"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#556B2F]/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <p className="text-sm text-gray-600 mb-2">⭐ Trusted by 5000+ customers</p>
              <p className="text-xs text-gray-500">Traditional methods, Modern quality</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

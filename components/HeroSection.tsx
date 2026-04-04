'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Droplet, Play } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
              Handcrafted cold-pressed oils and desi ghee made with traditional methods. Extracted from pristine farming lands using time-honored wooden mills. Pure, organic, and blessed with Ayurvedic benefits for your wellness journey.
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

          {/* Right Video Section */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-96"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative h-full"
            >
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-black">
                {/* Video Background */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1587849212617-d2acd65d6de7?w=600&h=600&fit=crop"
                >
                  {/* Premium oil extraction video from Unsplash */}
                  <source
                    src="https://videos.unsplash.com/video-static/converted/84d04ac3b2c0fde3f8c0f1a1c8c2f5e5-hd.mp4"
                    type="video/mp4"
                  />
                  {/* Fallback to image */}
                  <img
                    src="https://images.unsplash.com/photo-1587849212617-d2acd65d6de7?w=600&h=600&fit=crop"
                    alt="Premium Oils"
                    className="w-full h-full object-cover"
                  />
                </video>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#556B2F]/30 to-transparent"></div>

                {/* Play button overlay */}
                <motion.button
                  onClick={() => setIsVideoOpen(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Play
                      size={40}
                      className="text-[#556B2F] fill-[#556B2F] ml-1"
                    />
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <p className="text-sm text-gray-600 mb-2">⭐ Trusted by 5000+ customers</p>
              <p className="text-xs text-gray-500">Traditional wooden mill extraction</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoOpen(false)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-51"
            >
              ✕
            </button>
            <video
              autoPlay
              controls
              className="w-full h-auto rounded-2xl"
            >
              <source
                src="https://videos.unsplash.com/video-static/converted/84d04ac3b2c0fde3f8c0f1a1c8c2f5e5-hd.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

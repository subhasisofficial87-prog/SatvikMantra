'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f5f5f0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#556B2F] to-[#2F4F2F] text-white py-20">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" variants={itemVariants}>
            About Satvik Mantra
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-green-50" variants={itemVariants}>
            Bringing Ancient Wisdom to Modern Wellness
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F4F2F] mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Satvik Mantra was born from a deep passion for bringing the wisdom of Ayurveda and traditional wellness practices into modern life. In a world of synthetic supplements and processed foods, we believe in returning to nature's bounty.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our journey began with a simple mission: to provide pure, authentic, cold-pressed oils and desi ghee crafted using traditional methods that have been perfected over centuries. Every product is a testament to our commitment to quality, purity, and the healing power of nature.
            </p>
          </motion.div>

          <motion.div className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F4F2F] mb-6">Our Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#556B2F]"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-serif font-bold text-[#2F4F2F] mb-3">Purity</h3>
                <p className="text-gray-700">
                  We source our ingredients from trusted farmers who practice sustainable and organic farming. No chemicals, no additives, no shortcuts.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#556B2F]"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-serif font-bold text-[#2F4F2F] mb-3">Tradition</h3>
                <p className="text-gray-700">
                  We honor centuries-old extraction methods and Ayurvedic principles that ensure maximum nutritional benefits and therapeutic properties.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#556B2F]"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-serif font-bold text-[#2F4F2F] mb-3">Wellness</h3>
                <p className="text-gray-700">
                  Your health and wellbeing are at the heart of everything we do. We're dedicated to products that truly nourish your body and spirit.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F4F2F] mb-6">Why Choose Satvik Mantra?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#556B2F] text-2xl mr-4">🌿</span>
                <p className="text-gray-700">
                  <strong>Traditional Extraction:</strong> Our oils are extracted using wooden mills and cold-press methods that preserve all nutrients and antioxidants.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#556B2F] text-2xl mr-4">🐄</span>
                <p className="text-gray-700">
                  <strong>Desi Cow Ghee:</strong> Pure ghee from Indian desi cows, the gold standard in Ayurveda for rejuvenation and wellness.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#556B2F] text-2xl mr-4">♻️</span>
                <p className="text-gray-700">
                  <strong>Sustainable Sourcing:</strong> We partner with local farmers who practice sustainable agriculture and fair-trade practices.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#556B2F] text-2xl mr-4">✓</span>
                <p className="text-gray-700">
                  <strong>Quality Assured:</strong> Every batch is tested for purity and quality. What you get is 100% authentic, unadulterated wellness.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#556B2F] text-2xl mr-4">📚</span>
                <p className="text-gray-700">
                  <strong>Ayurvedic Guidance:</strong> We educate our customers about the Ayurvedic benefits and proper usage of each product.
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F4F2F] mb-6">Our Promise</h2>
            <div className="bg-gradient-to-r from-[#556B2F] to-[#2F4F2F] text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed">
                We promise to deliver products that honor both ancient wisdom and modern quality standards. Every oil, every drop of ghee, is a representation of our commitment to your health. We're not just selling products; we're inviting you to join a wellness journey rooted in nature, tradition, and authentic care.
              </p>
            </div>
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-lg text-gray-700 mb-8">
              Ready to experience the Satvik Mantra difference?
            </p>
            <Link
              href="/products"
              className="inline-block bg-[#556B2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2F4F2F] transition-colors duration-300"
            >
              Explore Our Products
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

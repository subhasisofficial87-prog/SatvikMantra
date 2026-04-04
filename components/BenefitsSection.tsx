'use client';
import { Droplet, Leaf, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BenefitsSection() {
  const benefits = [
    { icon: Droplet, title: 'Cold Pressed', description: 'Extracted using traditional methods to preserve nutrients.' },
    { icon: Leaf, title: 'Chemical-Free', description: 'No pesticides, no additives, no harmful chemicals.' },
    { icon: Zap, title: 'Ayurvedic Benefits', description: 'Formulated with ancient Ayurvedic knowledge.' },
    { icon: Shield, title: 'Certified Organic', description: 'Sourced from certified organic farms.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F5F5DC] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#556B2F]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5E3C]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl font-bold text-[#2F4F2F] mb-4">
            Why Choose Satvik Mantra?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're committed to bringing you the finest cold-pressed oils and ghee using time-honored traditions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(85, 107, 47, 0.15)' }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#556B2F]/30 transition-all duration-300 text-center"
              >
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-[#556B2F] to-[#2F4F2F] rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.15 }}
                  >
                    <Icon className="text-white" size={40} />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <h3 className="font-bold text-xl text-[#2F4F2F] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Accent line */}
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#556B2F] to-[#8B5E3C] mx-auto rounded-full"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

'use client';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    { name: 'Priya Sharma', text: 'The quality is exceptional. I can feel the difference within weeks of use.', rating: 5, avatar: '👩' },
    { name: 'Rajesh Kumar', text: 'Authentic cold-pressed oils just like my grandmother used to make.', rating: 5, avatar: '👨' },
    { name: 'Anjali Patel', text: 'Best desi ghee I have purchased. Pure and rich flavor.', rating: 5, avatar: '👩' },
    { name: 'Vivek Singh', text: 'Fast delivery, excellent packaging, and products are as described.', rating: 5, avatar: '👨' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-gradient-to-r from-[#F5F5DC] via-white to-[#C2A878]/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#556B2F]/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl font-bold text-[#2F4F2F] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Join thousands of happy customers experiencing the difference
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(85, 107, 47, 0.15)' }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#556B2F]/30 transition-all duration-300 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl text-[#556B2F]/10 font-serif">
                "
              </div>

              {/* Rating */}
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.1, duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed font-medium">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-[#2F4F2F]">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

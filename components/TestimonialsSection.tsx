import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    { name: 'Priya Sharma', text: 'The quality is exceptional. I can feel the difference within weeks of use.', rating: 5 },
    { name: 'Rajesh Kumar', text: 'Authentic cold-pressed oils just like my grandmother used to make.', rating: 5 },
    { name: 'Anjali Patel', text: 'Best desi ghee I have purchased. Pure and rich flavor.', rating: 5 },
    { name: 'Vivek Singh', text: 'Fast delivery, excellent packaging, and products are as described.', rating: 5 },
  ];

  return (
    <section className="py-16 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-bold text-center text-[#2F4F2F] mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-[#2F4F2F]">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

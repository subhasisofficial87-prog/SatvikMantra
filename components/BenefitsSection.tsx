import { Droplet, Leaf, Zap, Shield } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    { icon: Droplet, title: 'Cold Pressed', description: 'Extracted using traditional methods to preserve nutrients.' },
    { icon: Leaf, title: 'Chemical-Free', description: 'No pesticides, no additives, no harmful chemicals.' },
    { icon: Zap, title: 'Ayurvedic Benefits', description: 'Formulated with ancient Ayurvedic knowledge.' },
    { icon: Shield, title: 'Certified Organic', description: 'Sourced from certified organic farms.' },
  ];

  return (
    <section className="py-16 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-bold text-center text-[#2F4F2F] mb-12">
          Why Choose Satvik Mantra?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#556B2F] rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-[#2F4F2F] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

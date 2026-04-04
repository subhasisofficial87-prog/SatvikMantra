const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'satvikmantra';

const products = [
  {
    name: 'Wood Pressed Mustard Oil',
    slug: 'wood-pressed-mustard-oil',
    description: 'Premium quality wood-pressed mustard oil extracted using traditional wooden mills. Rich in omega-3 fatty acids and has warming properties perfect for massage and cooking.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1587849212617-d2acd65d6de7?w=600&h=600&fit=crop',
    category: 'Cooking Oils',
    extractionMethod: 'Traditional Wooden Mill',
    benefits: ['Rich in Omega-3', 'Promotes Circulation', 'Warming Properties', 'Perfect for Massage'],
    stock: 50,
    createdAt: new Date(),
  },
  {
    name: 'Cold Pressed Groundnut Oil',
    slug: 'cold-pressed-groundnut-oil',
    description: 'Pure, cold-pressed groundnut oil extracted without heat to preserve all nutrients. Perfect for cooking, salads, and skincare.',
    price: 549,
    image: 'https://images.unsplash.com/photo-1599599810694-b308d05b7d13?w=600&h=600&fit=crop',
    category: 'Cooking Oils',
    extractionMethod: 'Cold Press Method',
    benefits: ['High in Antioxidants', 'Healthy Cooking Oil', 'Supports Heart Health', 'Rich Flavor'],
    stock: 45,
    createdAt: new Date(),
  },
  {
    name: 'Cold Pressed Castor Oil',
    slug: 'cold-pressed-castor-oil',
    description: 'Pure cold-pressed castor oil with powerful detoxifying and healing properties. Ideal for oil pulling, massage, and natural remedies.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1586985289688-cacf913bb4b5?w=600&h=600&fit=crop',
    category: 'Therapeutic Oils',
    extractionMethod: 'Cold Press Method',
    benefits: ['Detoxifying Properties', 'Supports Digestion', 'Joint & Muscle Relief', 'Natural Healing'],
    stock: 35,
    createdAt: new Date(),
  },
  {
    name: 'Cold Pressed Sunflower Oil',
    slug: 'cold-pressed-sunflower-oil',
    description: 'Light, nutrient-rich sunflower oil perfect for daily cooking and skincare. High in Vitamin E and linoleic acid for optimal health.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1587393853556-b96b3bff0e38?w=600&h=600&fit=crop',
    category: 'Cooking Oils',
    extractionMethod: 'Cold Press Method',
    benefits: ['High in Vitamin E', 'Light & Mild Flavor', 'Supports Skin Health', 'Perfect for Daily Use'],
    stock: 60,
    createdAt: new Date(),
  },
  {
    name: 'Desi Cow Ghee',
    slug: 'desi-cow-ghee',
    description: 'Pure, golden ghee from Indian cow milk. Made traditionally with no additives. Rich in butyric acid and promotes digestive health.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1599599810747-b4d260b13da7?w=600&h=600&fit=crop',
    category: 'Ghee & Dairy',
    extractionMethod: 'Traditional Clarification',
    benefits: ['Boosts Immunity', 'Aids Digestion', 'Supports Brain Health', 'Golden & Pure'],
    stock: 40,
    createdAt: new Date(),
  },
];

const blogPosts = [
  {
    title: 'Benefits of Cold Pressed Oils',
    slug: 'benefits-of-cold-pressed-oils',
    excerpt: 'Discover why cold-pressed oils are superior to refined oils and how they support your wellness journey.',
    content: 'Cold-pressed oils are extracted at temperatures below 27°C without using chemical solvents. This method preserves all the natural nutrients, vitamins, and antioxidants that are often lost in conventional refining processes.\n\nUnlike refined oils that are bleached and deodorized, cold-pressed oils retain their original flavor and nutritional profile. They are rich in phytochemicals, polyphenols, and antioxidants that support heart health, reduce inflammation, and boost immunity.\n\nThe extraction process involves mechanically pressing the seeds, allowing the natural oils to flow out. This traditional method has been used for centuries and remains the gold standard for oil extraction in Ayurvedic practices.\n\nBenefits include better digestion, improved skin health, stronger immunity, and better cholesterol levels. Make the switch to cold-pressed oils and experience the difference in your health and wellness.',
    image: 'https://images.unsplash.com/photo-1587849212617-d2acd65d6de7?w=800&h=400&fit=crop',
    category: 'Health Benefits',
    author: 'Satvik Mantra Team',
    publishedAt: new Date('2024-01-15'),
    createdAt: new Date('2024-01-15'),
  },
  {
    title: 'Ghee in Ayurvedic Medicine',
    slug: 'ghee-in-ayurvedic-medicine',
    excerpt: 'Learn how desi cow ghee has been used in Ayurveda for thousands of years to promote health and longevity.',
    content: 'Ghee, also known as clarified butter, is one of the most sacred foods in Ayurvedic medicine. According to ancient texts, ghee is considered a complete superfood that balances all three doshas: Vata, Pitta, and Kapha.\n\nIn Ayurveda, ghee is used to enhance digestion, strengthen the nervous system, and promote longevity. It\'s particularly beneficial for those with dry, irritated digestion and helps carry the healing properties of herbs deeper into the body.\n\nPure desi cow ghee is rich in butyric acid, which feeds beneficial gut bacteria and supports the intestinal lining. It\'s also a source of fat-soluble vitamins A, D, E, and K, which are essential for nutrient absorption.\n\nThe traditional preparation of ghee involves slow heating and clarification of butter, removing the milk solids while preserving all the beneficial compounds. This method has been perfected over centuries and remains the foundation of Satvik Mantra\'s ghee production.\n\nRegular consumption of pure ghee can improve digestion, enhance memory, promote glowing skin, and support overall vitality.',
    image: 'https://images.unsplash.com/photo-1599599810747-b4d260b13da7?w=800&h=400&fit=crop',
    category: 'Ayurveda',
    author: 'Satvik Mantra Team',
    publishedAt: new Date('2024-01-20'),
    createdAt: new Date('2024-01-20'),
  },
  {
    title: 'Traditional Oil Extraction Methods',
    slug: 'traditional-oil-extraction-methods',
    excerpt: 'Understand how traditional wooden mill extraction preserves the integrity and nutritional value of oils.',
    content: 'Traditional oil extraction using wooden mills is an ancient practice that has been refined over millennia. This method is the foundation of our commitment to purity and quality at Satvik Mantra.\n\nThe wooden mill operates by slowly grinding seeds or nuts between two large stones, creating friction that naturally releases the oils. This low-temperature process preserves all heat-sensitive nutrients that modern high-speed, high-heat methods destroy.\n\nWooden mills are preferred because the wood itself doesn\'t impart metallic compounds into the oils, unlike steel machinery. The gentle, consistent pressure allows the oils to flow naturally without being damaged by excessive heat or chemical extraction.\n\nThis traditional method is labor-intensive and produces lower yields compared to industrial methods, but the quality difference is remarkable. The oils retain their natural aroma, flavor, and potency.\n\nAt Satvik Mantra, we partner with farmers who use traditional wooden mills to ensure every bottle contains the most nutritious, authentic oils. This commitment to tradition means you\'re not just buying oil – you\'re investing in your health the way your ancestors did.',
    image: 'https://images.unsplash.com/photo-1586985289688-cacf913bb4b5?w=800&h=400&fit=crop',
    category: 'Methods & Processes',
    author: 'Satvik Mantra Team',
    publishedAt: new Date('2024-02-01'),
    createdAt: new Date('2024-02-01'),
  },
  {
    title: 'Seasonal Eating According to Ayurveda',
    slug: 'seasonal-eating-according-to-ayurveda',
    excerpt: 'Discover how to adjust your diet with the seasons for optimal health and balance according to Ayurvedic principles.',
    content: 'Ayurveda teaches that eating seasonally is one of the keys to maintaining perfect health. Each season brings different qualities that affect our bodies, and by eating foods and oils suited to each season, we can maintain balance throughout the year.\n\nIn Spring, focus on lighter oils and warming spices to aid digestion. Summer requires cooling oils like coconut and sunflower to balance the heat. Autumn calls for nourishing, warming oils to prevent dryness. Winter needs rich, heavy oils to provide sustained warmth and energy.\n\nThe concept of "Ritucharya" (seasonal living) in Ayurveda includes adjusting your oil consumption. Cold-pressed oils have different thermal properties that make them suitable for different seasons and individual constitutions.\n\nFor instance, mustard oil is warming and best used in winter and spring, while sunflower oil is lighter and more suitable for summer. Understanding these principles helps you choose the right products for your needs throughout the year.\n\nBy following seasonal eating principles and using traditional oils appropriately, you align your body with nature\'s rhythms and support optimal digestion, immunity, and overall wellness.',
    image: 'https://images.unsplash.com/photo-1599599810694-b308d05b7d13?w=800&h=400&fit=crop',
    category: 'Wellness Tips',
    author: 'Satvik Mantra Team',
    publishedAt: new Date('2024-02-10'),
    createdAt: new Date('2024-02-10'),
  },
  {
    title: 'Why Cow Ghee is Superior',
    slug: 'why-cow-ghee-is-superior',
    excerpt: 'Understand the nutritional and spiritual significance of pure desi cow ghee compared to other types of ghee.',
    content: 'Not all ghee is created equal. Pure desi cow ghee is nutritionally superior to ghee from other sources, and this difference is backed by both modern science and ancient Ayurvedic wisdom.\n\nDesi cows, native to the Indian subcontinent, produce milk with a unique composition that makes ghee from this milk exceptionally nutritious. The milk contains different ratios of fatty acids, including more conjugated linoleic acid (CLA) and butyric acid compared to ghee from European cattle breeds.\n\nThe golden color of pure desi cow ghee indicates the presence of beta-carotene (converted to Vitamin A), which supports eye health, immunity, and skin health. This color cannot be achieved through artificial means and is a sign of quality and purity.\n\nIn Ayurveda, desi cow ghee is considered "Rasayana" – a substance that rejuvenates all tissues in the body. It\'s used in therapeutic treatments and is believed to enhance memory, support longevity, and promote spiritual clarity.\n\nWhen choosing ghee, always look for these indicators of quality:\n- Deep golden color (not white or pale yellow)\n- Rich, pleasant aroma\n- Sourced from desi cows, not European breeds\n- Produced using traditional clarification methods\n- No additives or preservatives\n\nSatvik Mantra\'s Desi Cow Ghee meets all these criteria, ensuring you receive the authentic benefits that have made ghee a cornerstone of Ayurvedic wellness for millennia.',
    image: 'https://images.unsplash.com/photo-1599599810747-b4d260b13da7?w=800&h=400&fit=crop',
    category: 'Ayurveda',
    author: 'Satvik Mantra Team',
    publishedAt: new Date('2024-02-15'),
    createdAt: new Date('2024-02-15'),
  },
];

async function seed() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('✓ Connected to MongoDB');

    const db = client.db(DB_NAME);

    // Clear existing data
    await db.collection('products').deleteMany({});
    await db.collection('blogposts').deleteMany({});
    console.log('✓ Cleared existing data');

    // Insert products
    const productsResult = await db.collection('products').insertMany(products);
    console.log(`✓ Inserted ${productsResult.insertedCount} products`);
    products.forEach((p, i) => {
      console.log(`  - ${p.name} (₹${p.price})`);
    });

    // Insert blog posts
    const blogResult = await db.collection('blogposts').insertMany(blogPosts);
    console.log(`✓ Inserted ${blogResult.insertedCount} blog posts`);
    blogPosts.forEach((b, i) => {
      console.log(`  - ${b.title}`);
    });

    console.log('\n✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();

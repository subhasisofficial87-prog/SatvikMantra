# Database Seeding Instructions

## Automatic Seeding via API Endpoint

Once the website is deployed to Vercel, the database can be seeded by making a POST request to the admin seed endpoint.

### Using curl (from command line):

```bash
curl -X POST https://satvikmantra.com/api/admin/seed \
  -H "Authorization: Bearer seed-key-satvikmantra"
```

Or for local development:

```bash
curl -X POST http://localhost:3000/api/admin/seed \
  -H "Authorization: Bearer seed-key-satvikmantra"
```

### Expected Response

On success, you'll receive:

```json
{
  "success": true,
  "message": "Database seeded successfully",
  "products": {
    "inserted": 5,
    "items": [
      "Wood Pressed Mustard Oil (₹599)",
      "Cold Pressed Groundnut Oil (₹549)",
      "Cold Pressed Castor Oil (₹699)",
      "Cold Pressed Sunflower Oil (₹499)",
      "Desi Cow Ghee (₹899)"
    ]
  },
  "blogPosts": {
    "inserted": 5,
    "items": [
      "Benefits of Cold Pressed Oils",
      "Ghee in Ayurvedic Medicine",
      "Traditional Oil Extraction Methods",
      "Seasonal Eating According to Ayurveda",
      "Why Cow Ghee is Superior"
    ]
  }
}
```

## Database Contents

### 5 Products:
1. **Wood Pressed Mustard Oil** - ₹599
   - Traditional wooden mill extraction
   - Rich in Omega-3, warming properties

2. **Cold Pressed Groundnut Oil** - ₹549
   - Cold press method, antioxidants
   - Perfect for cooking and skincare

3. **Cold Pressed Castor Oil** - ₹699
   - Detoxifying, therapeutic oil
   - Great for oil pulling and massage

4. **Cold Pressed Sunflower Oil** - ₹499
   - Light, mild flavor
   - High in Vitamin E

5. **Desi Cow Ghee** - ₹899
   - Pure, traditional clarification
   - Boosts immunity and digestion

### 5 Blog Posts:
1. Benefits of Cold Pressed Oils
2. Ghee in Ayurvedic Medicine
3. Traditional Oil Extraction Methods
4. Seasonal Eating According to Ayurveda
5. Why Cow Ghee is Superior

## Local Development Seeding

If you want to seed from your local development environment, you need to whitelist your IP address in MongoDB Atlas:

1. Go to MongoDB Atlas console
2. Select your cluster (Cluster0)
3. Go to Network Access → IP Whitelist
4. Add your current IP address or use 0.0.0.0/0 (less secure, only for development)

Then run:

```bash
MONGODB_URI="mongodb+srv://..." npm run seed
```

## Security Note

The seed endpoint uses a Bearer token for basic authentication. For production, consider:
- Using environment variables for the token
- Implementing IP whitelisting
- Using a more robust authentication mechanism
- Restricting the endpoint to specific IP ranges

Current token: `seed-key-satvikmantra`

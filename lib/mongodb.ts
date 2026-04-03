import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
let client: MongoClient | null = null;

export async function connectDB() {
  if (client) return client;
  
  if (!uri) {
    throw new Error('MONGODB_URI not set');
  }

  client = new MongoClient(uri);
  await client.connect();
  return client;
}

export async function getDatabase() {
  const client = await connectDB();
  return client.db('satvikmantra');
}

export async function getCollection(name: string) {
  const db = await getDatabase();
  return db.collection(name);
}

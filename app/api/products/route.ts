import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    const collection = await getCollection('products');
    const products = await collection.find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const product = await request.json();
    const collection = await getCollection('products');
    const result = await collection.insertOne(product);
    return NextResponse.json({ _id: result.insertedId, ...product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}

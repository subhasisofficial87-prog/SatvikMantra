import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const order = await request.json();
    const collection = await getCollection('orders');
    const result = await collection.insertOne({
      ...order,
      createdAt: new Date(),
    });
    return NextResponse.json({ _id: result.insertedId, ...order }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const collection = await getCollection('orders');
    const orders = await collection.find({}).sort({ createdAt: -1 }).limit(10).toArray();
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}

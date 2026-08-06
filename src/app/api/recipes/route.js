import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET /api/recipes - Fetch all recipes
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const recipes = await db
      .collection('recipes')
      .find({})
      .limit(50)
      .toArray();

    return NextResponse.json({ success: true, data: recipes }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
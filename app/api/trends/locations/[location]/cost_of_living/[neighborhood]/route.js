import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, neighborhood } = params;
  try {
    // Placeholder data
    const costOfLiving = {
      neighborhood,
      cost: 2000,
    };
    console.log(`Fetching cost of living for neighborhood ${neighborhood} in location ${location}`);
    return NextResponse.json(costOfLiving);
  } catch (error) {
    console.error(`Error fetching cost of living for neighborhood ${neighborhood} in location ${location}:`, error);
    console.error('Full error:', error.message, error.stack);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
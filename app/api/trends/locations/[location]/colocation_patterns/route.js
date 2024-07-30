import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location } = params;
  try {
    // Placeholder data
    const colocationPatterns = [
      { name: 'Pattern 1', count: 20 },
      { name: 'Pattern 2', count: 25 },
    ];
    console.log(`Fetching colocation patterns for location ${location}`);
    return NextResponse.json(colocationPatterns);
  } catch (error) {
    console.error(`Error fetching colocation patterns for location ${location}:`, error);
    console.error('Full error:', error.message, error.stack);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
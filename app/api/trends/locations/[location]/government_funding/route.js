import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location } = params;
  try {
    // Placeholder data
    const governmentFunding = [
      { name: 'Funding 1', amount: 100000 },
      { name: 'Funding 2', amount: 150000 },
    ];
    console.log(`Fetching government funding for location ${location}`);
    return NextResponse.json(governmentFunding);
  } catch (error) {
    console.error(`Error fetching government funding for location ${location}:`, error);
    console.error('Full error:', error.message, error.stack);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
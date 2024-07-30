import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;
  try {
    // Placeholder data for demonstration
    const productSentimentData = {
      company_id,
      sentiment: 'positive',
      score: 0.85,
    };
    console.log(`Fetching product sentiment for company ID: ${company_id}`);
    return NextResponse.json(productSentimentData);
  } catch (error) {
    console.error(`Error fetching product sentiment for company ID: ${company_id}`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
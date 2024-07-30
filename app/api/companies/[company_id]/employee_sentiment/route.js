import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;
  try {
    // Placeholder data for demonstration
    const sentimentData = {
      company_id,
      sentiment: 'positive',
      score: 0.85,
    };
    console.log(`Fetching employee sentiment for company ID: ${company_id}`);
    return NextResponse.json(sentimentData);
  } catch (error) {
    console.error(`Error fetching employee sentiment for company ID: ${company_id}`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
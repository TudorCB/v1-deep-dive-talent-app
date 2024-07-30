import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;
  try {
    // Placeholder data for demonstration
    const fundingRoundsData = {
      company_id,
      rounds: [
        { series: 'A', amount: 1000000, date: '2023-01-01' },
        { series: 'B', amount: 2000000, date: '2023-06-01' },
      ],
    };
    console.log(`Fetching funding rounds for company ID: ${company_id}`);
    return NextResponse.json(fundingRoundsData);
  } catch (error) {
    console.error(`Error fetching funding rounds for company ID: ${company_id}`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
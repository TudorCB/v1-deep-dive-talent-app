import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;
  try {
    // Placeholder data for demonstration
    const investorNetworkData = {
      company_id,
      investors: [
        { name: 'Investor A', type: 'VC' },
        { name: 'Investor B', type: 'Angel' },
      ],
    };
    console.log(`Fetching investor network for company ID: ${company_id}`);
    return NextResponse.json(investorNetworkData);
  } catch (error) {
    console.error(`Error fetching investor network for company ID: ${company_id}`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
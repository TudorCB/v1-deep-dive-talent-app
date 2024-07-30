import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;
  try {
    // Placeholder data for demonstration
    const valuesData = {
      company_id,
      values: ['Innovation', 'Integrity', 'Customer Focus'],
    };
    console.log(`Fetching company values for company ID: ${company_id}`);
    return NextResponse.json(valuesData);
  } catch (error) {
    console.error(`Error fetching company values for company ID: ${company_id}`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
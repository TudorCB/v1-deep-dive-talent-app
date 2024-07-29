import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;
  // Placeholder data for demonstration
  const totalCompensation = {
    baseSalary: 90000,
    bonus: 10000,
    equity: 5000,
    benefits: 15000,
    currency: 'USD',
    location,
    skillset
  };

  try {
    console.log(`Fetching total compensation for location: ${location}, skillset: ${skillset}`);
    return NextResponse.json(totalCompensation);
  } catch (error) {
    console.error('Error fetching total compensation:', error);
    console.error('Full error:', error.message, error.stack);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
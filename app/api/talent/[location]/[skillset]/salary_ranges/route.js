import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;
  // Placeholder data for demonstration
  const salaryRanges = {
    min: 50000,
    max: 120000,
    currency: 'USD',
    location,
    skillset
  };
  return NextResponse.json(salaryRanges);
}
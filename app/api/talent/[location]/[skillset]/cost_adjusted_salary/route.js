import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;
  // Placeholder data for demonstration
  const costAdjustedSalary = {
    adjustedSalary: 85000,
    currency: 'USD',
    location,
    skillset
  };
  return NextResponse.json(costAdjustedSalary);
}
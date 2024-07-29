import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;

  // Placeholder data for flight risk prediction
  const flightRisk = {
    'San Francisco': { 'React Developers': 'Low' },
    'New York': { 'React Developers': 'Medium' }
  };

  const risk = flightRisk[location]?.[skillset] || 'Unknown';

  return NextResponse.json({ message: 'Success', data: risk }, { status: 200 });
}
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;

  // Placeholder data for remote propensity
  const remotePropensity = {
    'San Francisco': { 'React Developers': 75, 'Node.js Developers': 60 },
    'New York': { 'React Developers': 80, 'Node.js Developers': 70 }
  };

  const propensity = remotePropensity[location]?.[skillset] || 0;

  return NextResponse.json({ message: 'Success', data: propensity }, { status: 200 });
}
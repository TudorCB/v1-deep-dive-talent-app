import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;

  // Placeholder data for diversity insights
  const diversityInsights = {
    'San Francisco': { 'React Developers': { gender: { male: 60, female: 40 }, ethnicity: { white: 50, asian: 40, hispanic: 10 } } },
    'New York': { 'React Developers': { gender: { male: 55, female: 45 }, ethnicity: { white: 40, asian: 30, hispanic: 20 } } }
  };

  const insights = diversityInsights[location]?.[skillset] || {};

  return NextResponse.json({ message: 'Success', data: insights }, { status: 200 });
}
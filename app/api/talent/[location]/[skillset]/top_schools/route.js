import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;

  // Placeholder data for top schools
  const topSchools = {
    'San Francisco': { 'React Developers': ['Stanford University', 'UC Berkeley'] },
    'New York': { 'React Developers': ['NYU', 'Columbia University'] }
  };

  const schools = topSchools[location]?.[skillset] || [];

  return NextResponse.json({ message: 'Success', data: schools }, { status: 200 });
}
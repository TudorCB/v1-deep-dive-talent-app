import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;

  // Placeholder data for company history
  const companyHistory = {
    'San Francisco': { 'React Developers': ['Google', 'Facebook'] },
    'New York': { 'React Developers': ['Amazon', 'Microsoft'] }
  };

  const history = companyHistory[location]?.[skillset] || [];

  return NextResponse.json({ message: 'Success', data: history }, { status: 200 });
}
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;

  // Placeholder data for office locations
  const officeLocationsData = {
    '1': ['San Francisco', 'New York', 'London'],
    '2': ['Los Angeles', 'Chicago', 'Tokyo']
  };

  const officeLocations = officeLocationsData[company_id] || [];

  return NextResponse.json({ message: 'Success', data: officeLocations }, { status: 200 });
}
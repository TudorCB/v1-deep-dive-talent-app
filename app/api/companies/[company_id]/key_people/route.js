import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;

  // Placeholder data for key people
  const keyPeopleData = {
    '1': ['John Doe', 'Jane Smith'],
    '2': ['Alice Johnson', 'Bob Brown']
  };

  const keyPeople = keyPeopleData[company_id] || [];

  return NextResponse.json({ message: 'Success', data: keyPeople }, { status: 200 });
}
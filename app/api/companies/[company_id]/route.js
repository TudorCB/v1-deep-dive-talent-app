import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { company_id } = params;

    // Placeholder data
    const companyData = {
      company_id,
      growth: {
        '2021-01': 100,
        '2021-02': 150,
        '2021-03': 200
      },
      key_people: ['John Doe', 'Jane Smith'],
      tech_stack: ['React', 'Node.js', 'MongoDB'],
      acquisitions: [
        { target: 'Company A', date: '2021-01-01', valuation: 1000000 },
        { target: 'Company B', date: '2021-02-01', valuation: 2000000 }
      ],
      office_locations: ['San Francisco', 'New York', 'London']
    };

    return NextResponse.json({ message: 'Success', data: companyData }, { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error);
    console.error('Full error:', error.message, error.stack);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;

  // Placeholder data for acquisitions
  const acquisitionsData = {
    '1': [
      { target: 'Company A', date: '2021-01-01', valuation: 1000000 },
      { target: 'Company B', date: '2021-02-01', valuation: 2000000 }
    ],
    '2': [
      { target: 'Company C', date: '2021-01-01', valuation: 1500000 },
      { target: 'Company D', date: '2021-02-01', valuation: 2500000 }
    ]
  };

  const acquisitions = acquisitionsData[company_id] || [];

  return NextResponse.json({ message: 'Success', data: acquisitions }, { status: 200 });
}
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;

  // Placeholder data for company growth
  const growthData = {
    '1': { '2021-01': 100, '2021-02': 150, '2021-03': 200 },
    '2': { '2021-01': 200, '2021-02': 250, '2021-03': 300 }
  };

  const growth = growthData[company_id] || {};

  return NextResponse.json({ message: 'Success', data: growth }, { status: 200 });
}
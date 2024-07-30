import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;
  try {
    // Placeholder data for demonstration
    const productLaunchesData = {
      company_id,
      launches: [
        { name: 'Product A', date: '2023-01-01', description: 'A new product launch' },
        { name: 'Product B', date: '2023-06-01', description: 'Another new product launch' },
      ],
    };
    console.log(`Fetching product launches for company ID: ${company_id}`);
    return NextResponse.json(productLaunchesData);
  } catch (error) {
    console.error(`Error fetching product launches for company ID: ${company_id}`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
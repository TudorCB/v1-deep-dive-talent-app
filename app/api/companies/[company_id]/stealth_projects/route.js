import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;
  try {
    // Placeholder data for demonstration
    const stealthProjectsData = {
      company_id,
      projects: [
        { name: 'Project X', description: 'A secret project' },
        { name: 'Project Y', description: 'Another secret project' },
      ],
    };
    console.log(`Fetching stealth projects for company ID: ${company_id}`);
    return NextResponse.json(stealthProjectsData);
  } catch (error) {
    console.error(`Error fetching stealth projects for company ID: ${company_id}`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
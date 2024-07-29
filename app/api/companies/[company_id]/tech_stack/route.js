import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { company_id } = params;

  // Placeholder data for tech stack
  const techStackData = {
    '1': ['React', 'Node.js', 'MongoDB'],
    '2': ['Angular', 'Java', 'MySQL']
  };

  const techStack = techStackData[company_id] || [];

  return NextResponse.json({ message: 'Success', data: techStack }, { status: 200 });
}
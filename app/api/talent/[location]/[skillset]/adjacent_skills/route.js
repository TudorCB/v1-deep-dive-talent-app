import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;

  // Placeholder data for adjacent skills
  const adjacentSkills = {
    'React Developers': ['Redux', 'Next.js', 'TypeScript'],
    'Node.js Developers': ['Express', 'MongoDB', 'Docker']
  };


  const skills = adjacentSkills[skillset] || [];

  return NextResponse.json({ message: 'Success', data: skills }, { status: 200 });
}
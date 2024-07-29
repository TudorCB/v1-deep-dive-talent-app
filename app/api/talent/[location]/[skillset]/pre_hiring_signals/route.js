import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location, skillset } = params;

  // Placeholder data for pre-hiring signals
  const preHiringSignals = {
    'San Francisco': { 'React Developers': ['Conference Attendance', 'Course Enrollments', 'Open-Source Contributions'] },
    'New York': { 'React Developers': ['Blog Posts', 'Conference Attendance', 'Open-Source Contributions'] }
  };

  const signals = preHiringSignals[location]?.[skillset] || [];

  return NextResponse.json({ message: 'Success', data: signals }, { status: 200 });
}
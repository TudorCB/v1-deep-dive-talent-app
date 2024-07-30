import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { location } = params;
  try {
    // Placeholder data
    const techClusters = [
      { name: 'Tech Cluster 1', count: 10 },
      { name: 'Tech Cluster 2', count: 15 },
    ];
    console.log(`Fetching tech clusters for location ${location}`);
    return NextResponse.json(techClusters);
  } catch (error) {
    console.error(`Error fetching tech clusters for location ${location}:`, error);
    console.error('Full error:', error.message, error.stack);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
// import db from '../../../../../utils/database';
import { scrapeData } from '../../../../../scripts/scrapeData';

// Function to get adjacent skills
async function getAdjacentSkills(location, skillset) {
  const query = 'SELECT adjacent_skills FROM talent_data WHERE location = ? AND skillset = ?';
  return new Promise((resolve, reject) => {
    db.query(query, [location, skillset], (err, results) => {
      if (err) {
        console.error('Error fetching adjacent skills:', err);
        console.error('Full error:', err.message, err.stack);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to get remote propensity
async function getRemotePropensity(location, skillset) {
  const query = 'SELECT remote_propensity FROM talent_data WHERE location = ? AND skillset = ?';
  return new Promise((resolve, reject) => {
    resolve([])
    // db.query(query, [location, skillset], (err, results) => {
    //   if (err) {
    //     console.error('Error fetching remote propensity:', err);
    //     console.error('Full error:', err.message, err.stack);
    //     reject(err);
    //   } else {
    //     resolve(results);
    //   }
    // });
  });
}

// Function to get diversity insights
async function getDiversityInsights(location, skillset) {
  const query = 'SELECT diversity_insights FROM talent_data WHERE location = ? AND skillset = ?';
  return new Promise((resolve, reject) => {
    resolve([])
    // db.query(query, [location, skillset], (err, results) => {
    //   if (err) {
    //     console.error('Error fetching diversity insights:', err);
    //     console.error('Full error:', err.message, err.stack);
    //     reject(err);
    //   } else {
    //     resolve(results);
    //   }
    // });
  });
}

export async function GET(request, { params }) {
  const { location, skillset } = params;

  try {
    // Trigger data scraping
    await scrapeData();

    // Fetch detailed talent data
    const [adjacentSkills, remotePropensity, diversityInsights] = await Promise.all([
      getAdjacentSkills(location, skillset),
      getRemotePropensity(location, skillset),
      getDiversityInsights(location, skillset)
    ]);

    const query = 'SELECT * FROM talent_data WHERE location = ? AND skillset = ?';
    const results = await new Promise((resolve, reject) => {
      resolve([])
      // db.query(query, [location, skillset], (err, results) => {
      //   if (err) {
      //     console.error('Error fetching data:', err);
      //     console.error('Full error:', err.message, err.stack);
      //     reject(err);
      //   } else {
      //     resolve(results);
      //   }
      // });
    });

    return NextResponse.json({
      message: 'Success',
      data: results,
      adjacentSkills,
      remotePropensity,
      diversityInsights
    }, { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error);
    console.error('Full error:', error.message, error.stack);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
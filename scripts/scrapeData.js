// scripts/scrapeData.js
const axios = require('axios');
const cheerio = require('cheerio');
// const db = require('../utils/database');
const cron = require('node-cron');

const scrapeData = async () => {
  try {
    const response = await axios.get('https://example.com/data'); // Updated this URL
    const $ = cheerio.load(response.data);

    // Example scraping logic
    const data = [];
    $('div.data-item').each((index, element) => {
      const title = $(element).find('h2').text();
      const description = $(element).find('p').text();
      data.push({ title, description });
    });

    // Insert data into the database
    data.forEach(item => {
      const query = 'INSERT INTO scraped_data (title, description) VALUES (?, ?)';
      console.log(query);
    //   db.query(query, [item.title, item.description], (err, result) => {
    //     if (err) {
    //       console.error('Error inserting data:', err);
    //       console.error('Full error:', err.message, err.stack); // Detailed error logging
    //     } else {
    //       console.log('Data inserted successfully:', result);
    //     }
    //   });
    });
  } catch (error) {
    console.error('Error scraping data:', error);
    console.error('Full error:', error.message, error.stack); // Detailed error logging
  }
};

// Schedule the script to run daily at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running the scrapeData script...');
  scrapeData();
});

// Export the function to allow manual triggering if needed
module.exports = scrapeData;
import axios from 'axios';

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    console.error('Full error:', error.message, error.stack);
    return [];
  }
};
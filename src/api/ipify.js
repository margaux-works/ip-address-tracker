import axios from 'axios';

const IPIFY_BASE_URL = 'https://geo.ipify.org/api/v2/country,city';

export const fetchIPData = async (query = '') => {
  try {
    const apiKey = import.meta.env.VITE_IPIFY_API_KEY;
    const url = `${IPIFY_BASE_URL}?apiKey=${apiKey}${
      query ? `&ipAddress=${query}` : ''
    }`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching IP data:', error);
    throw error;
  }
};

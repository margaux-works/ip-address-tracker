import axios from 'axios';

const IPIFY_BASE_URL = 'https://geo.ipify.org/api/v2/country,city';

// Regex to check if input is an IP address
const isIPAddress = (query) => /^(([0-9]{1,3}\.){3}[0-9]{1,3})$/.test(query);

// Function to fetch data from the IPIFY API
export const fetchIPData = async (query = '') => {
  try {
    const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

    // Determine if the query is an IP address or a domain
    const parameter = isIPAddress(query)
      ? `ipAddress=${query}`
      : `domain=${query}`;

    // Build the API URL
    const url = `${IPIFY_BASE_URL}?apiKey=${apiKey}${
      query ? `&${parameter}` : ''
    }`;

    // Fetch data from the API
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error('Error fetching IP data:', error.message);
    throw error;
  }
};

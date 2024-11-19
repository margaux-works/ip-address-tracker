import axios from 'axios';

const API_KEY = import.meta.env.VITE_IPIFY_API_KEY; // Retrieve API key from .env file

export const fetchIPData = async (query) => {
  const isIPAddress = /^(([0-9]{1,3}\.){3}[0-9]{1,3})$/.test(query);
  const isDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(query);

  // Determine query parameter - IP or Domain
  const queryParam = isIPAddress
    ? `ipAddress=${query}`
    : isDomain
    ? `domain=${query}`
    : '';

  // Throw an error for invalid input
  if (!queryParam) {
    throw new Error(
      'Invalid query. Please provide a valid IP address or domain.'
    );
  }

  // Construct the API URL
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${queryParam}`;

  try {
    // Make the API request
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Log and rethrow the error
    console.error('Error fetching IP data:', error.message);
    throw error;
  }
};

// Import the axios package
const axios = require('axios');

// Define the endpoint and the data to be sent
const endpoint = 'https://example.com/your-endpoint'; // Replace with your actual endpoint
const data = {
  key1: 'value1',
  key2: 'value2'
};

// Function to send a POST request
async function sendPostRequest() {
  try {
    const response = await axios.post(endpoint, data);
    console.log('Response Data:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the function
sendPostRequest();

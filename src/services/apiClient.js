import axios from 'axios';

const productionApiUrl = import.meta.env.VITE_API_URL;
const baseURL = productionApiUrl || '/api';

const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for response errors
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    let errorMessage = 'An unexpected error occurred';
    
    if (error.response) {
      // Server returned an error status code
      errorMessage = error.response.data?.message || `Server Error: ${error.response.status}`;
    } else if (error.request) {
      // Request was made but no response was received
      errorMessage = 'No response from server. Please check your network connection.';
    } else {
      // Error setting up the request
      errorMessage = error.message;
    }
    
    console.error('API Error:', errorMessage, error);
    return Promise.reject(new Error(errorMessage));
  }
);

export default apiClient;

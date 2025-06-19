import { getToken } from './tokenHandler';

// Use environment variable for backend URL in production
const API_URL = process.env.NODE_ENV === 'production' 
  ? (process.env.REACT_APP_API_URL || 'https://retail-git-main-giridhars-projects-03773486.vercel.app/api')
  : (process.env.REACT_APP_API_URL || 'http://localhost:5000/api');

export const apiRequest = async (endpoint, method = 'GET', data = null) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };

  const config = {
    method,
    headers,
    ...(data && { body: JSON.stringify(data) })
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);
    
    // Handle rate limiting specifically
    if (response.status === 429) {
      throw new Error('Too many requests. Please wait a moment and try again.');
    }

    // Try to parse JSON response
    let result;
    try {
      result = await response.json();
    } catch (parseError) {
      // If response is not JSON, create a basic error
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    if (!response.ok) {
      throw new Error(result.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return result;
  } catch (error) {
    // Handle specific error cases
    if (error.message.includes('Unauthorized') || error.message.includes('401')) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    // Re-throw the error with better context
    throw new Error(`API Error: ${error.message}`);
  }
};


import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    const { token, email } = response.data; // Include email in the response
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    console.log(token)
    console.log(email) // Store email in local storage
    return token;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isLoggedIn = () => {
  return localStorage.getItem('token') !== null;
};

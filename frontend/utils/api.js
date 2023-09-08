// utils/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getAllProducts = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

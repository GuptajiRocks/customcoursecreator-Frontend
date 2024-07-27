// AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:6060/auth/';

export const signup = async (name, email, password) => {
  const response = await axios.post(`${API_URL}signup`, {
    name,
    email,
    role: 'USER', // Assigning USER role to every signup
    password,
  });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}signin`, {
    email,
    password,
  });
  return response.data;
};

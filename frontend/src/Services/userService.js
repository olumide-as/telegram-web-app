// frontend/src/Services/userService.js

import axios from 'axios';

const API_URL = 'http://localhost:5001/api/users'; // Replace with your backend API URL

export const registerUser = async (telegramId, firstName, lastName, username) => {
  const response = await axios.post(`${API_URL}/register`, {
    telegramId,
    firstName,
    lastName,
    username,
  });
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};
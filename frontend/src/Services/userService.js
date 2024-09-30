// frontend/src/Services/userService.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api/users'; // Use env variable for API URL

export const registerUser = async (telegramId, firstName, lastName, username) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      telegramId,
      firstName,
      lastName,
      username,
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Re-throw or handle as needed
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Re-throw or handle as needed
  }
};

export const fetchUserByTelegramId = async (telegramId) => {
  try {
    const response = await axios.get(`${API_URL}/${telegramId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${telegramId}:`, error);
    throw error; // Re-throw or handle as needed
  }
};
// frontend/src/userService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

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
  const response = await axios.get(API_URL); // Fetch sorted users
  return response.data; // Return the array of users
};

export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const updateUserPoints = async (userId, points) => {
  const response = await axios.patch(`${API_URL}/${userId}/points`, { points });
  return response.data;
};

export const fetchUserData = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};
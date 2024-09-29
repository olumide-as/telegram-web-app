import axios from 'axios';

// Update to match the correct port
const API_URL = 'http://localhost:5001/api/users';

// Register user
export const registerUser = async (telegramId, firstName, lastName, username) => {
  const response = await axios.post(`${API_URL}/register`, { telegramId, firstName, lastName, username });
  return response.data;
};

// Login user
export const loginUser = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

// Update user points
export const updateUserPoints = async (userId, points) => {
  const response = await axios.patch(`${API_URL}/${userId}/points`, { points });
  return response.data;
};

// Fetch user data
export const fetchUserData = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};
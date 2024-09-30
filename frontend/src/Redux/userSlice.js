// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {},
  points: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setPoints(state, action) {
      state.points = action.payload;
    },
  },
});

export const { setUser, setPoints } = userSlice.actions;

export const fetchUserData = (telegramId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5001/api/users/${telegramId}`);
    const { points, firstName, lastName, username } = response.data;

    // Update Redux store
    dispatch(setUser({ first_name: firstName, last_name: lastName, username }));
    dispatch(setPoints(points));
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

export default userSlice.reducer;
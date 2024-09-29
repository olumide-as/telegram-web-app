// backend/routes/userRoutes.js

const express = require('express');
const { registerUser, getUsers } = require('../controllers/userController');

const router = express.Router();

// POST route to register the user
router.post('/register', registerUser);

// GET route to fetch sorted users
router.get('/', getUsers);  // Add this line for fetching users

module.exports = router;
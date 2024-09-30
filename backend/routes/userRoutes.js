// backend/routes/userRoutes.js

const express = require('express');
const { registerUser, getUsers, getUserByTelegramId } = require('../controllers/userController');

const router = express.Router();

// POST route to register the user
router.post('/register', registerUser);

// GET route to fetch sorted users
router.get('/', getUsers);

// GET route to fetch user by telegramId
router.get('/:telegramId', getUserByTelegramId); // Add this line for fetching user by telegramId

module.exports = router;
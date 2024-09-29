// backend/routes/testRoutes.js
const express = require('express');
const User = require('../models/userModel');  // Import a model to test

const router = express.Router();

router.get('/test-db', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: 'Database connection successful', users });
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed', error });
  }
});

module.exports = router;
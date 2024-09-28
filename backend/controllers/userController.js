// backend/controllers/userController.js

const User = require('../models/userModel');

// Function to handle user registration
exports.registerUser = async (req, res) => {
  const { telegramId, firstName, lastName, username } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ telegramId });

    if (!user) {
      // If not, create a new user
      user = new User({
        telegramId,
        firstName,
        lastName,
        username,
        points: 0,  // Initialize points (optional)
      });
      await user.save();
    }

    res.status(200).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};
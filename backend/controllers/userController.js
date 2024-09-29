// backend/controllers/userController.js

const User = require('../models/userModel');

// Function to handle user registration
exports.registerUser = async (req, res) => {
  const { telegramId, firstName, lastName, username } = req.body;

  if (!telegramId) {
    return res.status(400).json({ message: 'Telegram ID is required' });
  }

  try {
    // Check if the user already exists
    let user = await User.findOne({ telegramId });

    if (!user) {
      // Create a new user if not found
      user = new User({
        telegramId,
        firstName,
        lastName,
        username,
        points: 0,  // Initialize points (optional, based on your business logic)
      });
      await user.save();
    }

    // Respond with success message and user details
    res.status(200).json({
      message: 'User registered successfully',
      user: {
        telegramId: user.telegramId,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        points: user.points,
      },
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
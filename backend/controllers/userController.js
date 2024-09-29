// backend/controllers/userController.js

const User = require('../models/userModel');

// Function to handle user registration
exports.registerUser = async (req, res) => {
    const { telegramId, firstName, lastName, username } = req.body;

    // Check if the telegramId is provided
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
                points: 0,  // Initialize points (optional)
            });

            // Save the user to the database
            await user.save();
            console.log('New user registered:', user);
        } else {
            console.log('User already exists:', user);
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

// Function to get sorted users
exports.getUsers = async (req, res) => {
    try {
        // Fetch users sorted by firstName (you can change this to any field)
        const users = await User.find().sort({ firstName: 1 });  // Ascending order
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
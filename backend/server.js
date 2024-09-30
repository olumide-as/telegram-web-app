// backend/server.js
const express = require('express');
const cors = require('cors'); // Import the cors module for handling CORS
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db'); // Import the connectDB function
const mongoose = require('mongoose'); // Import mongoose for connection handling

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://telegram-web-app-mocha.vercel.app', // Allow only your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true, // Allow credentials (if needed)
};

// Middleware to parse incoming JSON requests
app.use(cors(corsOptions)); // Enable CORS with specified options
app.use(express.json()); // Middleware to parse JSON body

// Routes
app.use('/api/users', userRoutes); // Mount user routes

// Connect to MongoDB
connectDB();

// Server listen
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle graceful shutdown and disconnection from MongoDB
process.on('SIGINT', async () => {
  await mongoose.connection.close(); // Close MongoDB connection
  console.log('MongoDB connection closed due to app termination');
  process.exit(0); // Gracefully exit
});

// Optional: Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
  process.exit(1); // Exit the process on unhandled rejection
});
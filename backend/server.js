// backend/server.js

const express = require('express');
const cors = require('cors'); // Import the cors module for handling CORS
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db'); // Import the connectDB function
const mongoose = require('mongoose'); // Import mongoose for connection handling

const app = express();

// Middleware to parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes
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
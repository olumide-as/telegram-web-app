const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// MongoDB connection setup with proper error handling
const connectDB = async () => {
  try {
    // MongoDB connection
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');

    // Add event listeners for better logging of the connection state
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to the database');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err.message);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected from the database');
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the application if unable to connect to MongoDB
  }
};

// Call the function to connect to the database
connectDB();

// Handle graceful shutdown and disconnection from MongoDB
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0); // Gracefully exit
});

// Server listen
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const testRoutes = require('./routes/testRoutes');
app.use('/api/test', testRoutes);
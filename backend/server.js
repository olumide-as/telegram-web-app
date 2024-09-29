// backend/server.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db'); // Import the connectDB function

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
connectDB();

// Server listen
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle graceful shutdown and disconnection from MongoDB
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0); // Gracefully exit
});
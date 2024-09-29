// backend/models/userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegramId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  firstName: { 
    type: String 
  },
  lastName: { 
    type: String 
  },
  username: { 
    type: String,
    index: true  // Add an index to the username field for faster search queries
  },
  points: { 
    type: Number, 
    default: 0  // Initialize points to 0 by default
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt fields automatically
});

// Ensure that username is indexed
userSchema.index({ username: 1 });

module.exports = mongoose.model('User', userSchema);
// backend/models/userModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String },
  points: { type: Number, default: 0 },  // Initialize points (optional)
});

module.exports = mongoose.model('User', userSchema);
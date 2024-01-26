const mongoose = require('mongoose');

const StreakSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const HabitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  streaks: [StreakSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Habit', HabitSchema);

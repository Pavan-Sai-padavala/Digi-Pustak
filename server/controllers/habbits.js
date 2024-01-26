const express = require('express');
const Habit = require('./models/Habit');

const router = express.Router();

exports.createHabbit= async (req, res) => {
  const habit = new Habit({
    title: req.body.title
  });

  try {
    const savedHabit = await habit.save();
    res.json(savedHabit);
  } catch (err) {
    res.json({ message: err });
  }
};


exports.getHabbitById= async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    res.json(habit);
  } catch (err) {
    res.json({ message: err });
  }
};


exports.getAllHabbits= async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.json({ message: err });
  }
};


exports.addStreak= async (req, res) => {
  try {
    const habit = await Habit.updateOne(
      { _id: req.params.id },
      { $push: { streaks: req.body.streak } }
    );
    res.json(habit);
  } catch (err) {
    res.json({ message: err });
  }
};


exports.getStreakCount= async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    const streakCount = habit.streaks.length;
    res.json({ streakCount: streakCount });
  } catch (err) {
    res.json({ message: err });
  }
};


exports.updateHabbit= async (req, res) => {
  try {
    const habit = await Habit.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(habit);
  } catch (err) {
    res.json({ message: err });
  }
};


exports.deleteHabbit= async (req, res) => {
  try {
    const removedHabit = await Habit.remove({ _id: req.params.id });
    res.json(removedHabit);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = router;

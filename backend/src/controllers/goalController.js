const Goal = require("../models/goalModel");

// Create Goal
exports.createGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Goals
exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Goal
exports.updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark Goal Done
exports.markDone = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );
    res.json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Goal
exports.deleteGoal = async (req, res) => {
  try {
    await Goal.findByIdAndDelete(req.params.id);
    res.json({ message: "Goal deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
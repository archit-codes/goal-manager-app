const express = require("express");
const router = express.Router();

const {
  createGoal,
  getGoals,
  updateGoal,
  markDone,
  deleteGoal
} = require("../controllers/goalController");

router.post("/", createGoal);
router.get("/", getGoals);
router.put("/:id", updateGoal);
router.patch("/:id/done", markDone);
router.delete("/:id", deleteGoal);

module.exports = router;
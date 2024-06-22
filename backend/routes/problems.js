const express = require("express");
const router = express.Router();
const Problem = require("../model/Problem");

// POST /api/problems
router.post("/problems", async (req, res) => {
  const {
    title,
    description,
    difficulty,
    inputExample,
    outputExample,
    constraints,
    testCases,
  } = req.body;

  if (
    !title ||
    !description ||
    !difficulty ||
    !inputExample ||
    !outputExample ||
    !constraints ||
    !testCases
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newProblem = new Problem({
      title,
      description,
      difficulty,
      inputExample,
      outputExample,
      constraints,
      testCases,
    });

    const savedProblem = await newProblem.save();
    res.status(201).json(savedProblem);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/problems", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Route to get problems by difficulty
router.get("/problemsdifficulty", async (req, res) => {
  try {
    const { difficulty } = req.query;
    const query = {};
    if (difficulty) {
      query.difficulty = difficulty;
    }
    const problems = await Problem.find(query);
    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;

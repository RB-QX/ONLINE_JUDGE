const express = require("express");

const Problem = require("../model/Problem");

// POST /api/problems
exports.addproblem = async (req, res) => {
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
};

exports.getproblem = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// router.get("/problems", async (req, res) => {
//   try {
//     const problems = await Problem.find();
//     res.json(problems);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// Route to get problems by difficulty
exports.getproblemdifficulty = async (req, res) => {
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
};

// router.get("/:id", async (req, res) => {
//   try {
//     const problem = await Problem.findById(req.params.id);
//     if (!problem) {
//       return res.status(404).json({ message: "Problem not found" });
//     }
//     res.json(problem);
//   } catch (error) {
//     console.error("Error fetching problem:", error);
//     res.status(500).json({ message: "Failed to fetch problem" });
//   }
// });

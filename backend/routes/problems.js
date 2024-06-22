const express = require("express");
const router = express.Router();
const Problem = require("../model/Problem");
const isAuthenticated = require("../middlewares/auth");
const { isAdmin } = require("../middlewares/role");

// POST /api/problems
router.post("/addproblems", async (req, res) => {
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

router.get("/allproblems", isAuthenticated, isAdmin, async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

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

// // Import the required modules
// const express = require("express");

// const router = express.Router();

// const {
//   addproblem,
//   getproblem,
//   getproblemdifficulty,
// } = require("../controller/Problem");

// // Route for add problem
// router.post("/addproblems", addproblem);

// // Route for get all problem
// router.post("/allproblems", getproblem);

// // Route for get problem based on difficulties
// router.post("/problemsdifficulty", getproblemdifficulty);

// // Export the router for use in the main application
// module.exports = router;

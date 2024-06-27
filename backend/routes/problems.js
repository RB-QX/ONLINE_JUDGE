const express = require("express");
const router = express.Router();
const Problem = require("../model/Problem");
//const { auth } = require("../middlewares/auth");
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
    topics,
  } = req.body;

  if (
    !title ||
    !description ||
    !difficulty ||
    !inputExample ||
    !outputExample ||
    !constraints ||
    !testCases ||
    !topics
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
      topics,
    });

    const savedProblem = await newProblem.save();
    res.status(201).json(savedProblem);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/allproblems", async (req, res) => {
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
router.get("/allproblems/:id", async (req, res) => {
  try {
    const id = req.params.id.trim(); // Trim any leading/trailing whitespace

    const problem = await Problem.findById(id);
    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }
    res.json(problem);
  } catch (error) {
    console.error("Error fetching problem:", error);
    res.status(500).json({ message: "Failed to fetch problem" });
  }
});

// Delete problem by ID
router.delete("/allproblems/:id", async (req, res) => {
  try {
    const problem = await Problem.findByIdAndDelete(req.params.id);
    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }
    res.status(200).json({ message: "Problem deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting problem", error: error.message });
  }
});
// Update problem details by ID
router.put("/allproblems/:id", async (req, res) => {
  try {
    const problem = await Problem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }
    res.status(200).json(problem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating problem", error: error.message });
  }
});

router.delete("/delete-problem/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Problem.findByIdAndDelete(id);
    res.status(200).json({ message: "Problem deleted successfully" });
  } catch (error) {
    console.error("Error deleting problem:", error);
    res
      .status(500)
      .json({ message: "Failed to delete problem", error: error.message });
  }
});

module.exports = router;

// router.get("/problems/pending", async (req, res) => {
//   try {
//     const pendingProblems = await Problem.find({ status: "Pending" });
//     res.json(pendingProblems);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// router.patch("/problems/verify/:id", async (req, res) => {
//   try {
//     const updatedProblem = await Problem.findByIdAndUpdate(
//       req.params.id,
//       { status: "Verified" },
//       { new: true }
//     );
//     res.json(updatedProblem);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

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

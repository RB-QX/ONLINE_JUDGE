// const Problem = require("../model/Problem");

// exports.createProblem = async (req, res) => {
//   const {
//     title,
//     description,
//     difficulty,
//     inputExample,
//     outputExample,
//     constraints,
//     testCases,
//   } = req.body;

//   if (
//     !title ||
//     !description ||
//     !difficulty ||
//     !inputExample ||
//     !outputExample ||
//     !constraints ||
//     !testCases
//   ) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     const newProblem = new Problem({
//       title,
//       description,
//       difficulty,
//       inputExample,
//       outputExample,
//       constraints,
//       testCases,
//     });

//     const savedProblem = await newProblem.save();
//     res.status(201).json(savedProblem);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

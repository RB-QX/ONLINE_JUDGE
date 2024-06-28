const express = require("express");

const { generateFile } = require("../../compiler/generateFile");
const { generateInputFile } = require("../../compiler/generateInputFile");
const { executeCode } = require("../../compiler/executeCode");
const User = require("../model/User");
const Problem = require("../model/Problem");
const Submission = require("../model/Submission");
const router = express.Router();

router.post("/submit", async (req, res) => {
  const { userId, problemId, code, language, input } = req.body;

  console.log("Request body:", req.body);
  console.log("userinfo0");
  console.log(req.userId);
  if (!language || !code || !problemId || !userId) {
    return res.status(400).json({
      success: false,
      error: "Information missing while running code",
    });
  }

  try {
    console.log("userinfo");
    const userinfo = await User.findById(userId);
    console.log(userinfo);
    if (!userinfo) {
      console.error("User not found");
      return res
        .status(404)
        .json({ success: false, error: "Unauthorized user" });
    }

    const problem = await Problem.findById(problemId);
    if (!problem) {
      console.error("Problem not found");
      return res
        .status(404)
        .json({ success: false, error: "Problem not found" });
    }
    console.log("problem", problem);
    console.log("Generating files");
    const filePath = await generateFile(language, code);

    //console.log("Files generated: ", { filePath, inputPath });

    const isSubmit = req.body.isSubmit || false;
    if (!isSubmit) {
      const inputPath = await generateInputFile(input);
      const output = await executeCode(language, filePath, inputPath);
      return res.json({ filePath, inputPath, output });
    } else {
      let pass = 0;
      for (let i = 0; i < problem.testCases.length; i++) {
        const testCaseInput = problem.testCases[i].input;
        const expectedOutput = problem.testCases[i].output;

        console.log(`Running test case ${i + 1}`);
        const inputFilePath = await generateInputFile(testCaseInput);
        const actualOutput = await executeCode(
          language,
          filePath,
          inputFilePath
        );

        if (actualOutput.trim() !== expectedOutput.trim()) {
          console.log(`Test case ${i + 1} failed`);
          problem.total_submissions += 1;
          await problem.save();

          const submission = new Submission({
            problem: problem._id,
            user: userinfo._id,
            code,
            language,
            problemName: problem.title,
            verdict: `WA on TC ${
              pass + 1
            }\nWrong TestCase: \n${testCaseInput}\nYour output:\n${actualOutput}\nCorrect output:\n${expectedOutput}`,
          });
          await submission.save();
          userinfo.problems_submitted.push(submission._id);
          await userinfo.save();

          return res.json({
            wrongTC: testCaseInput,
            YourOutput: actualOutput,
            CorrectOutput: expectedOutput,
            pass,
            isCorrect: false,
          });
        } else {
          console.log(`Test case ${i + 1} passed`);
          pass++;
        }
      }

      problem.total_accepted += 1;
      problem.total_submissions += 1;
      await problem.save();

      const submission = new Submission({
        problem: problem._id,
        user: userinfo._id,
        code,
        language,
        problemName: problem.title,
        verdict: "AC",
      });
      await submission.save();
      userinfo.problems_submitted.push(submission._id);
      await userinfo.save();

      return res.json({
        isCorrect: true,
        passedtestcase: problem.testCases.length,
      });
    }
  } catch (error) {
    console.error("Error executing code:", error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;

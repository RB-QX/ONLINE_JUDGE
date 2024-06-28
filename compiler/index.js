const express = require("express");
const app = express();
const { generateFile } = require("./generateFile");
// const { executeCpp } = require("./executeCpp.js");
// const { executePython } = require("./executePython.js");
// const { executeJava } = require("./executeJava.js");
const cors = require("cors");
// const { executeC } = require("./executeC.js");
// const { executeJavaScript } = require("./executeJs.js");
const { generateInputFile } = require("./generateInputFile.js");
const { executeCode } = require("./executeCode");
const User = require("../backend/model/User");
const Problem = require("../backend/model/Problem");
const Submission = require("../backend/model/Submission");
//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ online: "compiler" });
});

app.post("/run", async (req, res) => {
  const { language, code, input } = req.body;

  if (!code) {
    return res.status(400).json({ success: false, error: "Empty code!" });
  }

  try {
    // Generate a unique file path for the code file
    const filePath = await generateFile(language, code);

    // Generate a unique file path for the input file (if provided)

    const inputPath = await generateInputFile(input);

    // Execute code using executeCode function
    const output = await executeCode(language, filePath, inputPath);

    // Return response with file paths and output
    res.json({ filePath, inputPath, output });
  } catch (error) {
    console.error("Error executing code:", error);
    res.status(500).json({ error: error });
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000!");
});

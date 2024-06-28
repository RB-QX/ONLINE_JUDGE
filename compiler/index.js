const express = require("express");
const app = express();
const { generateFile } = require("./generateFile");
const { executeCpp } = require("./executeCpp.js");
const { executePython } = require("./executePython.js");
const { executeJava } = require("./executeJava.js");
const cors = require("cors");
const { executeC } = require("./executeC.js");
const { executeJavaScript } = require("./executeJs.js");
const { generateInputFile } = require("./generateInputFile.js");

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ online: "compiler" });
});

app.post("/run", async (req, res) => {
  //   const language = req.body.language;
  //   const code = req.body.code;

  const { language, code, input } = req.body;

  if (code === undefined) {
    return res.status(404).json({ success: false, error: "Empty code!" });
  }
  try {
    const filePath = await generateFile(language, code);
    const inputPath = await generateInputFile(input);
    console.log(input); // const output = await executeCpp(filePath);
    let output;
    if (language === "cpp") {
      output = await executeCpp(filePath, inputPath);
      console.log("hii");
    } else if (language === "c") {
      output = await executeC(filePath, inputPath);
    } else if (language === "js") {
      output = await executeJavaScript(filePath, inputPath);
    } else if (language === "java") {
      output = await executeJava(filePath, inputPath);
    } else {
      output = await executePython(filePath, inputPath);
    }

    res.json({ filePath, inputPath, output });
  } catch (error) {
    //console.log("error is this", error.stderr);
    res.status(500).json({ error: error });
  }
});
// app.post("/run", async (req, res) => {
//   //   const language = req.body.language;
//   //   const code = req.body.code;

//   const { language, code, input, userID } = req.body;
//   if (code === undefined) {
//     return res.status(404).json({ success: false, error: "Empty code!" });
//   }
//   //const options = { bufferTimeoutMS: 20000 };
//   const userinfo = await User.findOne({ userid: userID });
//   if (!userinfo) {
//     res.status(404).send("unauthorized user");
//   }

//   try {
//     const { filePath, dirCodes } = await createFilepath(
//       language,
//       code,
//       userinfo.firstname
//     );
//     console.log(filePath);
//     const output = await executeCode(
//       filePath,
//       dirCodes,
//       input,
//       userinfo.firstname,
//       language
//     );
//     console.log(output);
//     // const output = await executeCpp(filePath);
//     res.json({ filePath, output });
//     // console.log(filePath);

//     //res.json({ filePath, output });
//   } catch (error) {
//     //console.log("error is this", error.stderr);
//     res.status(500).json({ message: "not working coodde", error: error });
//   }
// });

app.listen(5000, () => {
  console.log("Server is listening on port 5000!");
});

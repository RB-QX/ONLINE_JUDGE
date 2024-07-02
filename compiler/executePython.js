// const { exec } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// const outputPath = path.join(__dirname, "outputs");

// if (!fs.existsSync(outputPath)) {
//   fs.mkdirSync(outputPath, { recursive: true });
// }

// const executePython = (filepath, inputPath) => {
//   return new Promise((resolve, reject) => {
//     const process = exec(
//       `python ${filepath} < ${inputPath}`,
//       (error, stdout, stderr) => {
//         if (error) {
//           reject({ error, stderr });
//         }
//         if (stderr) {
//           reject(stderr);
//         }
//         resolve(stdout);
//       }
//     );
//     if (input) {
//       process.stdin.write(input);
//       process.stdin.end();
//     }
//   });
// };

// module.exports = {
//   executePython,
// };

const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executePython = (filepath, inputPath) => {
  return new Promise((resolve, reject) => {
    // Construct the command to execute the Python script
    let command = `python ${filepath}`;
    if (inputPath) {
      command += ` < ${inputPath}`;
    }

    exec(command, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
      if (error) {
        console.error("Execution Error:", error);
        return reject({ error: error.message, stderr });
      }
      if (stderr) {
        console.error("Execution STDERR:", stderr);
        return reject(stderr);
      }
      console.log("Execution STDOUT:", stdout);
      resolve(stdout);
    });
  });
};

module.exports = {
  executePython,
};

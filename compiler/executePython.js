const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

// // const executePython = (filepath) => {
// //   return new Promise((resolve, reject) => {
// //     exec(`python ${filepath}`, (error, stdout, stderr) => {
// //       if (error) {
// //         reject({ error, stderr });
// //       }
// //       if (stderr) {
// //         reject(stderr);
// //       }
// //       resolve(stdout);
// //     });
// //   });
// // };

const executePython = (filepath, inputPath) => {
  return new Promise((resolve, reject) => {
    const process = exec(
      `python ${filepath} < ${inputPath}`,
      (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr });
        }
        if (stderr) {
          reject(stderr);
        }
        resolve(stdout);
      }
    );
    if (input) {
      process.stdin.write(input);
      process.stdin.end();
    }
  });
};

module.exports = {
  executePython,
};
// const { exec } = require("child_process");
// const fs = require("fs");

// const executePython = (filepath, inputText) => {
//   return new Promise((resolve, reject) => {
//     // Construct the command to execute the Python script
//     let command = `python ${filepath}`;

//     // Execute the Python script
//     const process = exec(command, (error, stdout, stderr) => {
//       if (error) {
//         return reject({ error, stderr });
//       }
//       if (stderr) {
//         return reject(stderr);
//       }
//       resolve(stdout);
//     });

//     // Write inputText to the process's stdin
//     if (inputText) {
//       process.stdin.write(inputText);
//     }
//     process.stdin.end();
//   });
// };

// module.exports = {
//   executePython,
// };

// const { exec } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// const outputPath = path.join(__dirname, "outputs");
// if (!fs.existsSync(outputPath)) {
//   fs.mkdirSync(outputPath, { recursive: true });
// }

// const executeC = (filepath, inputPath) => {
//   const jobId = path.basename(filepath).split(".")[0];
//   const outPath = path.join(outputPath, `${jobId}.exe`);

//   return new Promise((resolve, reject) => {
//     // Construct the command to compile and execute the C program
//     let command = `gcc ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe`;
//     if (inputPath) {
//       command += ` < ${inputPath}`;
//     }

//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         return reject({ error, stderr });
//       }
//       if (stderr) {
//         return reject(stderr);
//       }
//       resolve(stdout);
//     });
//   });
// };

// module.exports = {
//   executeC,
// };

const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeC = (filePath, inputPath) => {
  const jobId = path.basename(filePath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.exe`);

  return new Promise((resolve, reject) => {
    // Command to compile the C file and then execute the compiled binary
    let command = `gcc ${filePath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe`;
    if (inputPath) {
      command += ` < ${inputPath}`;
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject({ error: error.message, stderr });
      }
      if (stderr) {
        return reject(stderr);
      }
      resolve(stdout);
    });
  });
};

module.exports = {
  executeC,
};

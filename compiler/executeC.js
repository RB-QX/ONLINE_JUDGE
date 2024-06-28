// const { exec } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// const outputPath = path.join(__dirname, "outputs");
// if (!fs.existsSync(outputPath)) {
//   fs.mkdirSync(outputPath, { recursive: true });
// }

// // const executeC = (filepath) => {
// //   const jobId = path.basename(filepath).split(".")[0];
// //   const outPath = path.join(outputPath, `${jobId}.exe`);

// //   return new Promise((resolve, reject) => {
// //     exec(
// //       `gcc ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe`,
// //       (error, stdout, stderr) => {
// //         if (error) {
// //           reject({ error, stderr });
// //         }
// //         if (stderr) {
// //           reject(stderr);
// //         }
// //         resolve(stdout);
// //       }
// //     );
// //   });
// // };
// const executeC = (filepath, inputPath) => {
//   const jobId = path.basename(filepath).split(".")[0];
//   const outPath = path.join(outputPath, `${jobId}.exe`);

//   return new Promise((resolve, reject) => {
//     const process = exec(
//       `gcc ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe < ${inputPath}`,
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
//   executeC,
// };

const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeC = (filepath, inputPath) => {
  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.exe`);

  return new Promise((resolve, reject) => {
    // Construct the command to compile and execute the C program
    let command = `gcc ${filepath} -o ${outPath} && cd ${outputPath} && .\\${jobId}.exe`;
    if (inputPath) {
      command += ` < ${inputPath}`;
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject({ error, stderr });
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

const { exec } = require("child_process");
//const path = require("path");

// const executeJavaScript = (filepath) => {
//   return new Promise((resolve, reject) => {
//     exec(`node ${filepath}`, (error, stdout, stderr) => {
//       if (error) {
//         reject({ error, stderr });
//       }
//       if (stderr) {
//         reject(stderr);
//       }
//       resolve(stdout);
//     });
//   });
// };
const executeJavaScript = (filepath, input) => {
  return new Promise((resolve, reject) => {
    const process = exec(`node ${filepath}`, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stderr });
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
    if (input) {
      process.stdin.write(input);
      process.stdin.end();
    }
  });
};

module.exports = {
  executeJavaScript,
};

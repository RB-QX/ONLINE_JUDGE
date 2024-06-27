const { exec } = require("child_process");

// const executeJava = (filepath) => {
//   return new Promise((resolve, reject) => {
//     exec(`java ${filepath}`, (error, stdout, stderr) => {
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
const executeJava = (filepath, input) => {
  return new Promise((resolve, reject) => {
    const process = exec(`java ${filepath}`, (error, stdout, stderr) => {
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
  executeJava,
};

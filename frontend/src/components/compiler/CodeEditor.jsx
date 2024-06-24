// import React, { useState } from "react";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-c";
// import "prismjs/components/prism-python";
// import "prismjs/components/prism-java";
// import "prismjs/themes/prism.css";
// import axios from "axios";

// function CodeEditor() {
//   const [code, setCode] = useState(`
//   // Include the input/output stream library
//   #include <iostream>

//   // Define the main function
//   int main() {
//       // Output "Hello World!" to the console
//       std::cout << "Hello World!";

//       // Return 0 to indicate successful execution
//       return 0;
//   }`);
//   const [output, setOutput] = useState("");
//   const [language, setLanguage] = useState("cpp");

//   const handleSubmit = async () => {
//     const payload = {
//       language,
//       code,
//     };
//     console.log(language);

//     try {
//       const { data } = await axios.post("http://localhost:5000/run", payload);
//       console.log(data);
//       setOutput(data.output);
//     } catch (error) {
//       console.log(error.response);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-4">AlgoU Online Code Compiler</h1>
//       <select
//         className="select-box border border-gray-300 rounded-lg py-1.5 px-4 mb-1 focus:outline-none focus:border-indigo-500"
//         onChange={(e) => setLanguage(e.target.value)}
//         value={language}
//       >
//         <option value="cpp">C++</option>
//         <option value="c">C</option>
//         <option value="py">Python</option>
//         <option value="java">Java</option>
//       </select>
//       <br />
//       <div
//         className="bg-gray-100 shadow-md w-full max-w-lg mb-4"
//         style={{ height: "300px", overflowY: "auto" }}
//       >
//         <Editor
//           value={code}
//           onValueChange={(code) => setCode(code)}
//           highlight={(code) =>
//             highlight(code, languages[language] || languages.js)
//           }
//           padding={10}
//           style={{
//             fontFamily: '"Fira code", "Fira Mono", monospace',
//             fontSize: 12,
//             outline: "none",
//             border: "none",
//             backgroundColor: "#f7fafc",
//             height: "100%",
//             overflowY: "auto",
//           }}
//         />
//       </div>

//       <button
//         onClick={handleSubmit}
//         type="button"
//         className="text-center inline-flex items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-5 h-5 mr-2"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
//           />
//         </svg>
//         Run
//       </button>

//       {output && (
//         <div className="outputbox mt-4 bg-gray-100 rounded-md shadow-md p-4">
//           <p
//             style={{
//               fontFamily: '"Fira code", "Fira Mono", monospace',
//               fontSize: 12,
//             }}
//           >
//             {output}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CodeEditor;

import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-c";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/themes/prism.css";
import axios from "axios";

const starterCodes = {
  cpp: `// Include the input/output stream library
#include <iostream>

// Define the main function
int main() {
    // Output "Hello World!" to the console
    std::cout << "Hello World!";

    // Return 0 to indicate successful execution
    return 0;
}`,
  c: `#include <stdio.h>

// Define the main function
int main() {
    // Output "Hello, World!" to the console
    printf("Hello, World!");

    // Return 0 to indicate successful execution
    return 0;
}`,
  py: `# Define the main function
def main():
    # Output "Hello, World!" to the console
    print("Hello, World!")

# Call the main function
if __name__ == "__main__":
    main()`,
  java: `public class Main {
    public static void main(String[] args) {
        // Output "Hello, World!" to the console
        System.out.println("Hello, World!");
    }
}`,
};

function CodeEditor() {
  const [code, setCode] = useState(starterCodes.cpp);
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("cpp");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(starterCodes[selectedLanguage]);
  };

  const handleSubmit = async () => {
    const payload = {
      language,
      code,
    };
    console.log(language);

    try {
      const { data } = await axios.post("http://localhost:5000/run", payload);
      console.log(data);
      setOutput(data.output);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">AlgoU Online Code Compiler</h1>
      <select
        className="select-box border border-gray-300 rounded-lg py-1.5 px-4 mb-1 focus:outline-none focus:border-indigo-500"
        onChange={handleLanguageChange}
        value={language}
      >
        <option value="cpp">C++</option>
        <option value="c">C</option>
        <option value="py">Python</option>
        <option value="java">Java</option>
      </select>
      <br />
      <div
        className="bg-gray-100 shadow-md w-full max-w-lg mb-4"
        style={{ height: "300px", overflowY: "auto" }}
      >
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) =>
            highlight(code, languages[language] || languages.js)
          }
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            outline: "none",
            border: "none",
            backgroundColor: "#f7fafc",
            height: "100%",
            overflowY: "auto",
          }}
        />
      </div>

      <button
        onClick={handleSubmit}
        type="button"
        className="text-center inline-flex items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
          />
        </svg>
        Run
      </button>

      {output && (
        <div className="outputbox mt-4 bg-gray-100 rounded-md shadow-md p-4">
          <p
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          >
            {output}
          </p>
        </div>
      )}
    </div>
  );
}

export default CodeEditor;

// import React, { useState } from "react";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-c";
// import "prismjs/components/prism-python";
// import "prismjs/components/prism-java";
// import "prismjs/themes/prism.css";
// import axios from "axios";

// const starterCodes = {
//   cpp: `// Include the input/output stream library
// #include <iostream>

// // Define the main function
// int main() {
//     // Output "Hello World!" to the console
//     std::cout << "Hello World!";

//     // Return 0 to indicate successful execution
//     return 0;
// }`,
//   c: `#include <stdio.h>

// // Define the main function
// int main() {
//     // Output "Hello, World!" to the console
//     printf("Hello, World!");

//     // Return 0 to indicate successful execution
//     return 0;
// }`,
//   py: `# Define the main function
// def main():
//     # Output "Hello, World!" to the console
//     print("Hello, World!")

// # Call the main function
// if __name__ == "__main__":
//     main()`,
//   java: `public class Main {
//     public static void main(String[] args) {
//         // Output "Hello, World!" to the console
//         System.out.println("Hello, World!");
//     }
// }`,
// };

// function CodeEditor() {
//   const [code, setCode] = useState(starterCodes.cpp);
//   const [output, setOutput] = useState("");
//   const [language, setLanguage] = useState("cpp");

//   const handleLanguageChange = (e) => {
//     const selectedLanguage = e.target.value;
//     setLanguage(selectedLanguage);
//     setCode(starterCodes[selectedLanguage]);
//   };

//   const handleSubmit = async () => {
//     const payload = {
//       language,
//       code,
//     };

//     try {
//       const { data } = await axios.post("http://localhost:5000/run", payload);
//       console.log(data);
//       setOutput(data.output);
//     } catch (error) {
//       console.log(error.response);
//     }
//   };

//   const handleEditorChange = (newCode) => {
//     setCode(newCode);
//   };

//   const handleKeyPress = (event) => {
//     // Check if Enter key is pressed
//     if (event.key === "Enter") {
//       event.preventDefault();

//       // Get the current line content before the cursor position
//       const currentCode = event.target.value;
//       const cursorPosition = event.target.selectionStart;
//       const lineStart = currentCode.lastIndexOf("\n", cursorPosition - 1) + 1;
//       const lineEnd = currentCode.indexOf("\n", cursorPosition);
//       const currentLine = currentCode.substring(
//         lineStart,
//         lineEnd !== -1 ? lineEnd : undefined
//       );

//       // Calculate indentation for the new line
//       const indent = calculateIndent(currentLine);

//       // Insert the newline character with appropriate indentation
//       const newCode =
//         currentCode.substring(0, cursorPosition) +
//         "\n" +
//         " ".repeat(indent) +
//         currentCode.substring(cursorPosition);
//       setCode(newCode);

//       // Move the cursor to the appropriate position
//       event.target.selectionStart = event.target.selectionEnd =
//         cursorPosition + indent + 1;
//     }
//   };

//   const calculateIndent = (line) => {
//     let indent = 0;
//     for (let i = 0; i < line.length; i++) {
//       if (line[i] === " ") {
//         indent++;
//       } else {
//         break;
//       }
//     }
//     return indent;
//   };

//   return (
//     <div className="container mx-auto py-8 flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-4">AlgoU Online Code Compiler</h1>
//       <select
//         className="select-box border border-gray-300 rounded-lg py-1.5 px-4 mb-1 focus:outline-none focus:border-indigo-500"
//         onChange={handleLanguageChange}
//         value={language}
//       >
//         <option value="cpp">C++</option>
//         <option value="c">C</option>
//         <option value="py">Python</option>
//         <option value="java">Java</option>
//       </select>
//       <br />
//       <div
//         className="bg-gray-100 shadow-md w-full max-w-lg mb-4"
//         style={{ height: "300px", overflowY: "auto" }}
//       >
//         <Editor
//           value={code}
//           onValueChange={handleEditorChange}
//           highlight={(code) =>
//             highlight(code, languages[language] || languages.js)
//           }
//           padding={10}
//           style={{
//             fontFamily: '"Fira code", "Fira Mono", monospace',
//             fontSize: 12,
//             outline: "none",
//             border: "none",
//             backgroundColor: "#f7fafc",
//             height: "100%",
//             overflowY: "auto",
//           }}
//           onKeyDown={handleKeyPress}
//         />
//       </div>

//       <button
//         onClick={handleSubmit}
//         type="button"
//         className="text-center inline-flex items-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-5 h-5 mr-2"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
//           />
//         </svg>
//         Run
//       </button>

//       {output && (
//         <div className="outputbox mt-4 bg-gray-100 rounded-md shadow-md p-4">
//           <p
//             style={{
//               fontFamily: '"Fira code", "Fira Mono", monospace',
//               fontSize: 12,
//             }}
//           >
//             {output}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CodeEditor;

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
//   cpp: `#include <iostream>

// int main() {
//     std::cout << "Hello World!";
//     return 0;
// }`,
//   c: `#include <stdio.h>

// int main() {
//     printf("Hello, World!");
//     return 0;
// }`,
//   py: `def main():
//     print("Hello, World!")

// if __name__ == "__main__":
//     main()`,
//   java: `public class Main {
//     public static void main(String[] args) {
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
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You must be logged in to submit code.");
//       return;
//     }

//     const payload = {
//       language,
//       code,
//     };

//     try {
//       const { data } = await axios.post("http://localhost:5000/run", payload, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setOutput(data.output);
//     } catch (error) {
//       console.error(error.response);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-richblack-900 flex flex-col items-center py-8">
//       <h1 className="text-4xl font-bold text-blue-600 mb-6">Code Editor</h1>

//       <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4 border-4 border-blue-500">
//         <div className="flex justify-between items-center mb-4">
//           <label className="text-lg font-medium text-gray-700">
//             Choose Language:
//           </label>
//           <select
//             className="border border-gray-300 rounded-lg py-1.5 px-4 focus:outline-none focus:border-gray-300 "
//             onChange={handleLanguageChange}
//             value={language}
//           >
//             <option value="cpp">C++</option>
//             <option value="c">C</option>
//             <option value="py">Python</option>
//             <option value="java">Java</option>
//           </select>
//         </div>

//         <div
//           className="editor-container bg-gray-100 rounded-lg mb-4 border-2 border-gray-300"
//           style={{ minHeight: "400px", overflowY: "auto" }}
//         >
//           <Editor
//             value={code}
//             onValueChange={setCode}
//             highlight={(code) =>
//               highlight(code, languages[language] || languages.js)
//             }
//             padding={10}
//             style={{
//               fontFamily: '"Fira code", "Fira Mono", monospace',
//               fontSize: 14,
//               minHeight: "200px",
//               whiteSpace: "pre-wrap",
//               wordWrap: "break-word",
//             }}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//         >
//           Run Code
//         </button>
//       </div>

//       {output && (
//         <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4 mt-6 border-4 border-blue-500">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Output:</h2>
//           <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-gray-800 border-2 border-gray-300">
//             {output}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CodeEditor;

import React, { useState, useEffect } from "react";
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

function CodeEditor({ problemId, userId }) {
  const [code, setCode] = useState(starterCodes.cpp);
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("cpp");

  useEffect(() => {
    const fetchSavedCode = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get-code", {
          params: { userId, problemId },
        });
        if (response.status === 200) {
          setCode(response.data.code);
          setLanguage(response.data.language);
        }
      } catch (error) {
        console.error("Error fetching saved code:", error.message);
      }
    };

    fetchSavedCode();
  }, [problemId, userId]);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(starterCodes[selectedLanguage]);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to submit code.");
      return;
    }
    const payload = {
      userId,
      problemId,
      code,
      language,
    };

    try {
      //const { data } = await axios.post("http://localhost:5000/run", payload);
      const { data } = await axios.post("http://localhost:5000/run", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOutput(data.output);
    } catch (error) {
      console.error("Error running code:", error.response);
    }
  };

  const handleSaveCode = async () => {
    const payload = {
      userId,
      problemId,
      code,
      language,
    };

    try {
      await axios.post("http://localhost:8000/save-code", payload);
      console.log("Code saved successfully");
    } catch (error) {
      console.error("Error saving code:", error.message);
    }
  };

  return (
    <div className="h-fit bg-white mx-auto py-8 flex flex-col items-center">
      <h1 className="text-3xl text-yellow-400 font-bold mb-4">Code Here</h1>
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
        style={{ height: "400px", overflowY: "auto" }}
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
        className="text-center inline-flex items-center text-white bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
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

      <button
        onClick={handleSaveCode}
        type="button"
        className="text-center inline-flex items-center text-white bg-gradient-to-br from-green-500 to-blue-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      >
        Save
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

// import React, { useEffect, useState } from "react";
// import "./index.css"; // Ensure Tailwind CSS is applied

// const problemsData = [
//   {
//     title: "Two Sum",
//     description:
//       "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
//     difficulty: "Easy",
//     inputExample: "[2, 7, 11, 15], target = 9",
//     outputExample: "[0, 1]",
//     constraints:
//       "Each input would have exactly one solution, and you may not use the same element twice.",
//     testCases: [
//       { input: "[2, 7, 11, 15], target = 9", output: "[0, 1]" },
//       { input: "[3, 2, 4], target = 6", output: "[1, 2]" },
//     ],
//   },
//   {
//     title: "Add Two Numbers",
//     description:
//       "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
//     difficulty: "Medium",
//     inputExample: "2 -> 4 -> 3, 5 -> 6 -> 4",
//     outputExample: "7 -> 0 -> 8",
//     constraints:
//       "The number of nodes in each linked list is in the range [1, 100].",
//     testCases: [
//       { input: "2 -> 4 -> 3, 5 -> 6 -> 4", output: "7 -> 0 -> 8" },
//       { input: "0, 0", output: "0" },
//     ],
//   },
// ];

// const ProblemCard = ({ problem }) => {
//   return (
//     <div className="p-4 mb-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-2">{problem.title}</h2>
//       <p className="mb-2">{problem.description}</p>
//       <div className="mb-2">
//         <strong>Difficulty:</strong> {problem.difficulty}
//       </div>
//       <div className="mb-2">
//         <strong>Input Example:</strong> {problem.inputExample}
//       </div>
//       <div className="mb-2">
//         <strong>Output Example:</strong> {problem.outputExample}
//       </div>
//       <div className="mb-2">
//         <strong>Constraints:</strong> {problem.constraints}
//       </div>
//       <div>
//         <strong>Test Cases:</strong>
//         <ul className="list-disc pl-5">
//           {problem.testCases.map((testCase, index) => (
//             <li key={index}>
//               <strong>Input:</strong> {testCase.input} -{" "}
//               <strong>Output:</strong> {testCase.output}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const ProblemsPage = () => {
//   const [problems, setProblems] = useState([]);

//   useEffect(() => {
//     // Simulating fetch call
//     setProblems(problemsData);
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-4 h-full">
//       <h1 className="text-3xl font-bold mb-6 text-yellow-500">Problems</h1>
//       {problems.map((problem, index) => (
//         <ProblemCard key={index} problem={problem} />
//       ))}
//     </div>
//   );
// };

// const Problem = () => {
//   return (
//     <div className="App">
//       <ProblemsPage />
//     </div>
//   );
// };

// export default Problem;

import React, { useState, useEffect } from "react";
// //import './index.css'; // Ensure Tailwind CSS is applied

// const problemsData = [
//   {
//     title: "Two Sum",
//     description:
//       "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
//     difficulty: "Easy",
//     inputExample: "[2, 7, 11, 15], target = 9",
//     outputExample: "[0, 1]",
//     constraints:
//       "Each input would have exactly one solution, and you may not use the same element twice.",
//     testCases: [
//       { input: "[2, 7, 11, 15], target = 9", output: "[0, 1]" },
//       { input: "[3, 2, 4], target = 6", output: "[1, 2]" },
//     ],
//   },
//   {
//     title: "Add Two Numbers",
//     description:
//       "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
//     difficulty: "Medium",
//     inputExample: "2 -> 4 -> 3, 5 -> 6 -> 4",
//     outputExample: "7 -> 0 -> 8",
//     constraints:
//       "The number of nodes in each linked list is in the range [1, 100].",
//     testCases: [
//       { input: "2 -> 4 -> 3, 5 -> 6 -> 4", output: "7 -> 0 -> 8" },
//       { input: "0, 0", output: "0" },
//     ],
//   },
// ];

// const ProblemCard = ({ problem }) => {
//   return (
//     <div className="p-4 mb-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-2">{problem.title}</h2>
//       <p className="mb-2">{problem.description}</p>
//       <div className="mb-2">
//         <strong>Difficulty:</strong> {problem.difficulty}
//       </div>
//       <div className="mb-2">
//         <strong>Input Example:</strong> {problem.inputExample}
//       </div>
//       <div className="mb-2">
//         <strong>Output Example:</strong> {problem.outputExample}
//       </div>
//       <div className="mb-2">
//         <strong>Constraints:</strong> {problem.constraints}
//       </div>
//       <div>
//         <strong>Test Cases:</strong>
//         <ul className="list-disc pl-5">
//           {problem.testCases.map((testCase, index) => (
//             <li key={index}>
//               <strong>Input:</strong> {testCase.input} -{" "}
//               <strong>Output:</strong> {testCase.output}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const CompilerPage = () => {
//   const [problems, setProblems] = useState([]);
//   const [selectedProblem, setSelectedProblem] = useState(null);
//   const [code, setCode] = useState("");

//   useEffect(() => {
//     // Simulating fetch call
//     setProblems(problemsData);
//     setSelectedProblem(problemsData[0]); // Default to the first problem
//   }, []);

//   const handleProblemChange = (e) => {
//     const problem = problems.find((p) => p.title === e.target.value);
//     setSelectedProblem(problem);
//   };

//   return (
//     <div className="h-screen flex">
//       <div className="w-1/2 p-4 overflow-y-auto bg-gray-100">
//         <select
//           className="w-full mb-4 p-2 border rounded"
//           onChange={handleProblemChange}
//         >
//           {problems.map((problem, index) => (
//             <option key={index} value={problem.title}>
//               {problem.title}
//             </option>
//           ))}
//         </select>
//         {selectedProblem && <ProblemCard problem={selectedProblem} />}
//       </div>
//       <div className="w-1/2 p-4">
//         <textarea
//           className="w-full h-full p-4 border rounded resize-none"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           placeholder="Write your code here..."
//         ></textarea>
//       </div>
//     </div>
//   );
// };

// const Problem = () => {
//   return (
//     <div className="App">
//       <CompilerPage />
//     </div>
//   );
// };

// export default Problem;

// Ensure Tailwind CSS is applied

const mockProblems = [
  {
    id: 1,
    title: "2 sum problem",
    difficulty: "Easy",
    solved: true,
    topic: "Array",
  },

  {
    id: 2,
    title: "Problem 2",
    difficulty: "Easy",
    solved: false,
    topic: "String",
  },
  {
    id: 3,
    title: "Problem 3",
    difficulty: "Easy",
    solved: true,
    topic: "Tree",
  },
  {
    id: 4,
    title: "Problem 4",
    difficulty: "Easy",
    solved: false,
    topic: "Graph",
  },
  { id: 5, title: "Problem 5", difficulty: "Easy", solved: true, topic: "DP" },
  {
    id: 6,
    title: "Problem 6",
    difficulty: "Medium",
    solved: false,
    topic: "Array",
  },
  {
    id: 7,
    title: "Problem 7",
    difficulty: "Medium",
    solved: true,
    topic: "String",
  },
  {
    id: 8,
    title: "Problem 8",
    difficulty: "Medium",
    solved: false,
    topic: "Tree",
  },
  {
    id: 9,
    title: "Problem 9",
    difficulty: "Medium",
    solved: true,
    topic: "Graph",
  },
  {
    id: 10,
    title: "Problem 10",
    difficulty: "Medium",
    solved: false,
    topic: "DP",
  },
  {
    id: 11,
    title: "Problem 11",
    difficulty: "Hard",
    solved: false,
    topic: "Array",
  },
  {
    id: 12,
    title: "Problem 12",
    difficulty: "Hard",
    solved: true,
    topic: "String",
  },
  {
    id: 13,
    title: "Problem 13",
    difficulty: "Hard",
    solved: false,
    topic: "Tree",
  },
  {
    id: 14,
    title: "Problem 14",
    difficulty: "Hard",
    solved: true,
    topic: "Graph",
  },
  {
    id: 15,
    title: "Problem 15",
    difficulty: "Hard",
    solved: false,
    topic: "DP",
  },
];

const ProblemsPage = () => {
  const [problems, setProblems] = useState([]);
  const [difficulty, setDifficulty] = useState("All");

  useEffect(() => {
    // Replace with actual API call
    // axios.get("/api/problems").then(response => setProblems(response.data));
    setProblems(mockProblems); // Using mock data
  }, []);

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const filteredProblems =
    difficulty === "All"
      ? problems
      : problems.filter((problem) => problem.difficulty === difficulty);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Problems</h1>
      <div className="mb-4">
        <label htmlFor="difficulty" className="mr-2">
          Filter by Difficulty:
        </label>
        <select
          id="difficulty"
          className="p-2 border rounded"
          value={difficulty}
          onChange={handleDifficultyChange}
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Problem ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Solved</th>
            <th className="py-2 px-4 border-b">Difficulty</th>
            <th className="py-2 px-4 border-b">Topic</th>
          </tr>
        </thead>
        <tbody>
          {filteredProblems.map((problem) => (
            <tr key={problem.id}>
              <td className="py-2 px-4 border-b">{problem.id}</td>
              <td className="py-2 px-4 border-b">{problem.title}</td>
              <td className="py-2 px-4 border-b">
                {problem.solved ? "Yes" : "No"}
              </td>
              <td className="py-2 px-4 border-b">{problem.difficulty}</td>
              <td className="py-2 px-4 border-b">{problem.topic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemsPage;

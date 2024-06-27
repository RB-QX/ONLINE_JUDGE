// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ProblemsPage = () => {
//   const [problems, setProblems] = useState([]);
//   const [difficulty, setDifficulty] = useState("");

//   useEffect(() => {
//     const fetchProblems = async () => {
//       let url = "http://localhost:8000/allproblems";
//       if (difficulty) {
//         url = `http://localhost:8000/problemsdifficulty?difficulty=${difficulty}`;
//       }
//       try {
//         const response = await fetch(url);
//         if (response.ok) {
//           const data = await response.json();
//           setProblems(data);
//         } else {
//           throw new Error("Failed to fetch problems");
//         }
//       } catch (error) {
//         console.error("Error fetching problems:", error);
//         // Handle error as needed, e.g., show an error message to the user
//       }
//     };

//     fetchProblems();
//   }, [difficulty]);

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case "Easy":
//         return "bg-green-200 text-green-800";
//       case "Medium":
//         return "bg-yellow-200 text-yellow-800";
//       case "Hard":
//         return "bg-red-200 text-red-800";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="bg-yellow-100 w-full min-h-screen">
//       <div className="container mx-auto px-4 py-8 text-black-400">
//         <h1 className="text-3xl font-bold mb-4">Problems</h1>

//         <div className="mb-4">
//           <label
//             htmlFor="difficulty"
//             className="block text-sm font-medium text-yellow-600"
//           >
//             Filter by Difficulty:
//           </label>
//           <select
//             id="difficulty"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//             className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           >
//             <option value="">All</option>
//             <option value="Easy">Easy</option>
//             <option value="Medium">Medium</option>
//             <option value="Hard">Hard</option>
//           </select>
//         </div>

//         <table className="min-w-full bg-white border border-gray-200">
//           <thead className="bg-yellow-200">
//             <tr>
//               <th className="py-2 px-4 border-b">Title</th>
//               <th className="py-2 px-4 border-b">Description</th>
//               <th className="py-2 px-4 border-b">Difficulty</th>
//             </tr>
//           </thead>
//           <tbody>
//             {problems.map((problem) => (
//               <tr key={problem._id} className="border-b">
//                 <td className="py-2 px-4">
//                   <Link
//                     to={`/problems/${problem._id}`}
//                     className="text-blue-600 hover:underline"
//                   >
//                     {problem.title}
//                   </Link>
//                 </td>
//                 <td className="py-2 px-4">{problem.description}</td>
//                 <td
//                   className={`py-2 px-4 ${getDifficultyColor(
//                     problem.difficulty
//                   )}`}
//                 >
//                   {problem.difficulty}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProblemsPage;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ProblemsPage = () => {
//   const [problems, setProblems] = useState([]);
//   const [difficulty, setDifficulty] = useState("");

//   useEffect(() => {
//     const fetchProblems = async () => {
//       let url = "http://localhost:8000/allproblems";
//       if (difficulty) {
//         url = `http://localhost:8000/problemsdifficulty?difficulty=${difficulty}`;
//       }
//       try {
//         const response = await fetch(url);
//         if (response.ok) {
//           const data = await response.json();
//           setProblems(data);
//         } else {
//           throw new Error("Failed to fetch problems");
//         }
//       } catch (error) {
//         console.error("Error fetching problems:", error);
//         // Handle error as needed, e.g., show an error message to the user
//       }
//     };

//     fetchProblems();
//   }, [difficulty]);

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case "Easy":
//         return "bg-green-200 text-green-800";
//       case "Medium":
//         return "bg-yellow-200 text-yellow-800";
//       case "Hard":
//         return "bg-red-200 text-red-800";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="bg-yellow-100 w-full min-h-screen">
//       <div className="container mx-auto px-4 py-8 text-black-400">
//         <h1 className="text-3xl font-bold mb-4">Problems</h1>

//         <div className="mb-4">
//           <label
//             htmlFor="difficulty"
//             className="block text-sm font-medium text-yellow-600"
//           >
//             Filter by Difficulty:
//           </label>
//           <select
//             id="difficulty"
//             value={difficulty}
//             onChange={(e) => setDifficulty(e.target.value)}
//             className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           >
//             <option value="">All</option>
//             <option value="Easy">Easy</option>
//             <option value="Medium">Medium</option>
//             <option value="Hard">Hard</option>
//           </select>
//         </div>

//         <table className="min-w-full bg-white border border-gray-200">
//           <thead className="bg-yellow-200">
//             <tr>
//               <th className="py-2 px-4 border-b">Title</th>
//               <th className="py-2 px-4 border-b">Topics</th>
//               <th className="py-2 px-4 border-b">Difficulty</th>
//               <th className="py-2 px-4 border-b">Verdict</th>
//             </tr>
//           </thead>
//           <tbody>
//             {problems.map((problem) => (
//               <tr key={problem._id} className="border-b">
//                 <td className="py-2 px-4">
//                   <Link
//                     to={`/problems/${problem._id}`}
//                     className="text-blue-600 hover:underline"
//                   >
//                     {problem.title}
//                   </Link>
//                 </td>
//                 <td className="py-2 px-4">{problem.topics}</td>
//                 <td
//                   className={`py-2 px-4 ${getDifficultyColor(
//                     problem.difficulty
//                   )}`}
//                 >
//                   {problem.difficulty}
//                 </td>
//                 <td className="py-2 px-4">
//                   {problem.verdict ? "Accepted" : "Unsolved"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProblemsPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProblemsPage = () => {
  const [problems, setProblems] = useState([]);
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    const fetchProblems = async () => {
      let url = "http://localhost:8000/allproblems";
      if (difficulty) {
        url = `http://localhost:8000/problemsdifficulty?difficulty=${difficulty}`;
      }
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setProblems(data);
        } else {
          throw new Error("Failed to fetch problems");
        }
      } catch (error) {
        console.error("Error fetching problems:", error);
        // Handle error as needed, e.g., show an error message to the user
      }
    };

    fetchProblems();
  }, [difficulty]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-200 text-green-800";
      case "Medium":
        return "bg-yellow-200 text-yellow-800";
      case "Hard":
        return "bg-red-200 text-red-800";
      default:
        return "";
    }
  };

  const getVerdict = (verdict) => {
    return verdict ? "Accepted" : "Unsolved";
  };

  return (
    <div className="bg-yellow-100 w-full min-h-screen">
      <div className="container mx-auto px-4 py-8 text-black-400">
        <h1 className="text-3xl font-bold mb-4">Problems</h1>

        <div className="mb-4">
          <label
            htmlFor="difficulty"
            className="block text-sm font-medium text-yellow-600"
          >
            Filter by Difficulty:
          </label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-yellow-200">
            <tr>
              <th className="py-2 px-4 border-r border-gray-200 text-center">
                Title
              </th>
              <th className="py-2 px-4 border-r border-gray-200 text-center">
                Topics
              </th>
              <th className="py-2 px-4 border-r border-gray-200 text-center">
                Difficulty
              </th>
              <th className="py-2 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr key={problem._id} className="border-b">
                <td className="py-2 px-4 border-r border-gray-200 text-center">
                  <Link
                    to={`/problems/${problem._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {problem.title}
                  </Link>
                </td>
                <td className="py-2 px-4 border-r border-gray-200 text-center">
                  {problem.topics.join(", ")}
                </td>
                <td
                  className={`py-2 px-4 border-r border-gray-200 text-center ${getDifficultyColor(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </td>
                <td className="py-2 px-4 text-center">
                  {getVerdict(problem.verdict)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemsPage;

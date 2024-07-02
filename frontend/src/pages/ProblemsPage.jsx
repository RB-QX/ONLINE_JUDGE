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
    return verdict === "Accepted" ? "Solved" : "Unsolved";
  };
  const getVerdictStyle = (verdict) => {
    switch (verdict) {
      case "Accepted":
        return { color: "green" }; // Accepted
      case "Unsolved":
        return { color: "red" }; // Wrong Answer
      default:
        return {};
    }
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
                  {problem.topics}
                </td>
                <td
                  className={`py-2 px-4 border-r border-gray-200 text-center ${getDifficultyColor(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </td>
                <td
                  className="py-2 px-4 text-center"
                  style={getVerdictStyle(problem.verdict)}
                >
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
//       }
//     };

//     fetchProblems();
//   }, [difficulty]);

//   const fetchVerdict = async (problemId) => {
//     const userId = localStorage.getItem("userId");
//     try {
//       const response = await fetch(
//         `http://localhost:8000/verdict/${userId}/${problemId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         return data.verdict;
//       } else {
//         throw new Error("Failed to fetch verdict");
//       }
//     } catch (error) {
//       console.error(`Error fetching verdict for problem ${problemId}:`, error);
//       return "Unsolved";
//     }
//   };

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

//   const getVerdictStyle = (verdict) => {
//     switch (verdict) {
//       case "Accepted":
//         return { color: "green" }; // Accepted
//       case "Unsolved":
//         return { color: "red" }; // Wrong Answer
//       default:
//         return {};
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
//               <th className="py-2 px-4 border-r border-gray-200 text-center">
//                 Title
//               </th>
//               <th className="py-2 px-4 border-r border-gray-200 text-center">
//                 Topics
//               </th>
//               <th className="py-2 px-4 border-r border-gray-200 text-center">
//                 Difficulty
//               </th>
//               <th className="py-2 px-4 text-center">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {problems.map((problem) => (
//               <tr key={problem._id} className="border-b">
//                 <td className="py-2 px-4 border-r border-gray-200 text-center">
//                   <Link
//                     to={`/problems/${problem._id}`}
//                     className="text-blue-600 hover:underline"
//                   >
//                     {problem.title}
//                   </Link>
//                 </td>
//                 <td className="py-2 px-4 border-r border-gray-200 text-center">
//                   {problem.topics}
//                 </td>
//                 <td
//                   className={`py-2 px-4 border-r border-gray-200 text-center ${getDifficultyColor(
//                     problem.difficulty
//                   )}`}
//                 >
//                   {problem.difficulty}
//                 </td>
//                 <td className="py-2 px-4 text-center">
//                   {fetchVerdict(problem._id).then((verdict) => (
//                     <span style={getVerdictStyle(verdict)}>
//                       {verdict === "Accepted" ? "Solved" : "Unsolved"}
//                     </span>
//                   ))}
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

// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // const ProblemsPage = () => {
// //   const [problems, setProblems] = useState([]);
// //   const [difficulty, setDifficulty] = useState("");
// //   const [loggedIn, setLoggedIn] = useState(false);
// //   const [verdicts, setVerdicts] = useState({});

// //   useEffect(() => {
// //     const fetchProblems = async () => {
// //       let url = "http://localhost:8000/allproblems";
// //       if (difficulty) {
// //         url = `http://localhost:8000/problemsdifficulty?difficulty=${difficulty}`;
// //       }
// //       try {
// //         const response = await fetch(url);
// //         if (response.ok) {
// //           const data = await response.json();
// //           setProblems(data);
// //           // Fetch verdicts for each problem after fetching problems
// //           await fetchVerdicts(data);
// //         } else {
// //           throw new Error("Failed to fetch problems");
// //         }
// //       } catch (error) {
// //         console.error("Error fetching problems:", error);
// //       }
// //     };

// //     fetchProblems();
// //     const userId = localStorage.getItem("userId");
// //     setLoggedIn(!!userId);
// //   }, [difficulty]);

// //   const fetchVerdicts = async (problems) => {
// //     const userId = localStorage.getItem("userId");
// //     const verdictsObj = {};
// //     try {
// //       // Fetch verdicts for each problem asynchronously
// //       await Promise.all(
// //         problems.map(async (problem) => {
// //           const response = await fetch(
// //             `http://localhost:8000/verdict/${userId}/${problem._id}`
// //           );
// //           if (response.ok) {
// //             const data = await response.json();
// //             verdictsObj[problem._id] = data.verdict;
// //           } else {
// //             throw new Error(
// //               `Failed to fetch verdict for problem ${problem._id}`
// //             );
// //           }
// //         })
// //       );
// //       setVerdicts(verdictsObj);
// //     } catch (error) {
// //       console.error("Error fetching verdicts:", error);
// //     }
// //   };

// //   const getDifficultyColor = (difficulty) => {
// //     switch (difficulty) {
// //       case "Easy":
// //         return "bg-green-200 text-green-800";
// //       case "Medium":
// //         return "bg-yellow-200 text-yellow-800";
// //       case "Hard":
// //         return "bg-red-200 text-red-800";
// //       default:
// //         return "";
// //     }
// //   };

// //   const getVerdictStyle = (verdict) => {
// //     switch (verdict) {
// //       case "Accepted":
// //         return { color: "green" }; // Accepted
// //       case "Unsolved":
// //         return { color: "red" }; // Wrong Answer
// //       default:
// //         return {};
// //     }
// //   };

// //   const getVerdict = (problemId) => {
// //     if (!loggedIn || !verdicts[problemId]) {
// //       return "Unsolved"; // Default to Unsolved if user is not logged in or verdict is not fetched yet
// //     }
// //     return verdicts[problemId] === "Accepted" ? "Solved" : "Unsolved";
// //   };

// //   return (
// //     <div className="bg-yellow-100 w-full min-h-screen">
// //       <div className="container mx-auto px-4 py-8 text-black-400">
// //         <h1 className="text-3xl font-bold mb-4">Problems</h1>

// //         <div className="mb-4">
// //           <label
// //             htmlFor="difficulty"
// //             className="block text-sm font-medium text-yellow-600"
// //           >
// //             Filter by Difficulty:
// //           </label>
// //           <select
// //             id="difficulty"
// //             value={difficulty}
// //             onChange={(e) => setDifficulty(e.target.value)}
// //             className="mt-1 block w-50 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// //           >
// //             <option value="">All</option>
// //             <option value="Easy">Easy</option>
// //             <option value="Medium">Medium</option>
// //             <option value="Hard">Hard</option>
// //           </select>
// //         </div>

// //         <table className="min-w-full bg-white border border-gray-200">
// //           <thead className="bg-yellow-200">
// //             <tr>
// //               <th className="py-2 px-4 border-r border-gray-200 text-center">
// //                 Title
// //               </th>
// //               <th className="py-2 px-4 border-r border-gray-200 text-center">
// //                 Topics
// //               </th>
// //               <th className="py-2 px-4 border-r border-gray-200 text-center">
// //                 Difficulty
// //               </th>
// //               <th className="py-2 px-4 text-center">Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {problems.map((problem) => (
// //               <tr key={problem._id} className="border-b">
// //                 <td className="py-2 px-4 border-r border-gray-200 text-center">
// //                   <Link
// //                     to={`/problems/${problem._id}`}
// //                     className="text-blue-600 hover:underline"
// //                   >
// //                     {problem.title}
// //                   </Link>
// //                 </td>
// //                 <td className="py-2 px-4 border-r border-gray-200 text-center">
// //                   {problem.topics}
// //                 </td>
// //                 <td
// //                   className={`py-2 px-4 border-r border-gray-200 text-center ${getDifficultyColor(
// //                     problem.difficulty
// //                   )}`}
// //                 >
// //                   {problem.difficulty}
// //                 </td>
// //                 <td
// //                   className="py-2 px-4 text-center"
// //                   style={getVerdictStyle(getVerdict(problem._id))}
// //                 >
// //                   {getVerdict(problem._id)}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProblemsPage;

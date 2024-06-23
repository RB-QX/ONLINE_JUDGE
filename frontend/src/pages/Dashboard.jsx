// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="  mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {/* Manage Problems */}
//         <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300">
//           <h2 className="text-xl font-semibold mb-2">Manage Problems</h2>
//           <p className="text-gray-700">View and manage coding problems.</p>
//         </div>

//         {/* Manage Users */}
//         <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300">
//           <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
//           <p className="text-gray-700">Manage user accounts and roles.</p>
//         </div>

//         {/* Analytics */}
//         <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300">
//           <h2 className="text-xl font-semibold mb-2">Analytics</h2>
//           <p className="text-gray-700">View website analytics and trends.</p>
//         </div>

//         {/* Settings */}
//         <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300">
//           <h2 className="text-xl font-semibold mb-2">Settings</h2>
//           <p className="text-gray-700">
//             Manage website settings and preferences.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProblems, setTotalProblems] = useState(0);
  const [pendingProblems, setPendingProblems] = useState(0);

  useEffect(() => {
    // Fetch total users
    fetch("http://localhost:8000/totaluser")
      .then((response) => response.json())
      .then((data) => setTotalUsers(data.length))
      .catch((error) => console.error("Error fetching total users:", error));

    // Fetch total problems
    fetch("http://localhost:8000/allproblems")
      .then((response) => response.json())
      .then((data) => setTotalProblems(data.length))
      .catch((error) => console.error("Error fetching total problems:", error));

    // Fetch pending problems
    fetch("http://localhost:8000/allpendinguserproblems")
      .then((response) => response.json())
      .then((data) => setPendingProblems(data.length))
      .catch((error) =>
        console.error("Error fetching pending problems:", error)
      );
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-2xl">{totalUsers}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Total Problems</h2>
          <p className="text-2xl ">{totalProblems}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Pending Problems</h2>
          <p className="text-2xl">{pendingProblems}</p>
          <Link to="/pendingproblems" className="text-blue-500 underline">
            View Pending Problems
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

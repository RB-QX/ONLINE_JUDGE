import React from "react";

const Dashboard = () => {
  return (
    <div className="  mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Manage Problems */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Manage Problems</h2>
          <p className="text-gray-700">View and manage coding problems.</p>
        </div>

        {/* Manage Users */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
          <p className="text-gray-700">Manage user accounts and roles.</p>
        </div>

        {/* Analytics */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Analytics</h2>
          <p className="text-gray-700">View website analytics and trends.</p>
        </div>

        {/* Settings */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-700">
            Manage website settings and preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

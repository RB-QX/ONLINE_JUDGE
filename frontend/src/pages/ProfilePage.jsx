import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user information from localStorage or wherever it's stored
    const storedUser = {
      email: localStorage.getItem("email"),
    };

    setUser(storedUser);
  }, []);

  if (!user) {
    return <p>Loading...</p>; // Handle loading state if necessary
  }

  return (
    <div className="mx-auto  p-6 bg-yellow-100 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        User Profile
      </h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <p className="mt-1 block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;

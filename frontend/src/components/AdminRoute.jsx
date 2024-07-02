// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const AdminRoute = ({ isLoggedIn }) => {
//   const userRole = localStorage.getItem("role");

//   if (!isLoggedIn || userRole !== "admin") {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// };

// export default AdminRoute;

import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const AdminRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const userRole = localStorage.getItem("role");

  return isLoggedIn && userRole === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminRoute;

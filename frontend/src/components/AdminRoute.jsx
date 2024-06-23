import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ isLoggedIn }) => {
  const userRole = localStorage.getItem("role");

  if (!isLoggedIn || userRole !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;

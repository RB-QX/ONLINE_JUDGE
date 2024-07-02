import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  // useEffect(() => {
  //   // Check if user is already logged in
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

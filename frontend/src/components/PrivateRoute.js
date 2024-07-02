// import React from 'react'
// import {Navigate} from 'react-router-dom';

// const PrivateRoute = ({isLoggedIn, children}) => {
//   if(isLoggedIn) {
//     return children;
//   }
//   else {
//     return <Navigate to="/login"/>
//   }
// }

// export default PrivateRoute

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

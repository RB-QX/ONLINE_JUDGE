import React from "react";
import logo from "../assets/logo.gif";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  let userRole = localStorage.getItem("role");

  const handleLogout = () => {
    // Clear localStorage completely
    localStorage.clear();
    // Set isLoggedIn state to false
    setIsLoggedIn(false);
    // Show logout success toast
    toast.success("Logged Out");
  };

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <div className="flex flex-row justify-center items-center">
          <img src={logo} alt="Logo" width={80} height={15} loading="lazy" />
          <h1 className=" px- -10  text-xl text-yellow-200 ">
            {" "}
            CODE INNOVATE GROW
          </h1>
        </div>
      </Link>

      <nav>
        <ul className="text-richblack-100 flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/contest">Contest</Link>
            </li>
          )}
          <li>
            <Link to="/compiler">Compiler</Link>
          </li>
          {isLoggedIn && userRole === "admin" && (
            <li>
              <Link to="/addproblems">AddProblems</Link>
            </li>
          )}
          {isLoggedIn && userRole === "admin" && (
            <li>
              <Link to="/deleteproblems">Update and Delete</Link>
            </li>
          )}

          {isLoggedIn && userRole === "user" && (
            <li>
              <Link to="/adduserproblems">AddProblems</Link>
            </li>
          )}
          <li>
            <Link to="/allproblems">Problem</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/register">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={handleLogout}
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && userRole === "admin" && (
          <Link to="/dashboard">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Dashboard
            </button>
          </Link>
        )}

        {isLoggedIn && userRole === "user" && (
          <Link to="/profile">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Profile
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

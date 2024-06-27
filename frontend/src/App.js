import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import ProblemsPage from "./pages/ProblemsPage";
import AddAdminProblemForm from "./components/AddAdminProblemForm";
import AddUserProblemForm from "./components/AddUserProblemForm";
import PendingProblems from "./pages/PendingProblems";
import AdminRoute from "./components/AdminRoute";
import ProfilePage from "./pages/ProfilePage";
// import CodeEditor from "./components/compiler/CodeEditor";
import NormalCodeEditor from "./components/compiler/NormalCodeEditor";
import SpecificPage from "./pages/SpecificPage";
import DeleteProblem from "./components/DeleteProblemPage";
import UpdateProblem from "./pages/UpdatePage";
import ContestPage from "./components/contest/ContestPage";
import LeaderboardPage from "./components/contest/LeaderboardPage";
import AddContestProblem from "./components/contest/AddContestProblem";
import SpecificContestPage from "./components/contest/SpecificContestPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-auto bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/compiler" element={<NormalCodeEditor />} />
        <Route
          path="/contest"
          element={<ContestPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/register"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        {/* <Route
          path="/addproblems"
          element={<AddAdminProblemForm isLoggedIn={isLoggedIn} />}
        /> */}
        <Route element={<AdminRoute isLoggedIn={isLoggedIn} />}>
          <Route
            path="/addproblems"
            element={<AddAdminProblemForm isLoggedIn={isLoggedIn} />}
          />
        </Route>
        <Route element={<AdminRoute isLoggedIn={isLoggedIn} />}>
          <Route
            path="/deleteproblems"
            element={<DeleteProblem isLoggedIn={isLoggedIn} />}
          />
        </Route>
        <Route element={<AdminRoute isLoggedIn={isLoggedIn} />}>
          <Route
            path="/update/:id"
            element={<UpdateProblem isLoggedIn={isLoggedIn} />}
          />
        </Route>

        <Route
          path="/adduserproblems"
          element={<AddUserProblemForm isLoggedIn={isLoggedIn} />}
        />
        <Route element={<AdminRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/pendingproblems" element={<PendingProblems />} />
        </Route>
        <Route element={<AdminRoute isLoggedIn={isLoggedIn} />}>
          <Route
            path="/contestproblemform"
            element={<AddContestProblem isLoggedIn={isLoggedIn} />}
          />
        </Route>

        <Route path="/allproblems" element={<ProblemsPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password/:id/:token"
          element={<ResetPassword />}
        ></Route>

        <Route
          path="/problems/:id/"
          element={<SpecificPage isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/allcontestproblem/:id/"
          element={<SpecificContestPage isLoggedIn={isLoggedIn} />}
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

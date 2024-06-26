const express = require("express");
const app = express();
// const dotenv = require("dotenv");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("./model/User.js");
// const cookieparser = require("cookie-parser");
const { DBConnection } = require("./database/db.js");
const cors = require("cors");
const userRoutes = require("./routes/user");
const problemsRoutes = require("./routes/problems");
const adduserproblemRoutes = require("./routes/adduserproblem");
//const authMiddleware = require("./middlewars/auth");

const code = require("./routes/code");
app.use(cors());
DBConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);
app.use("/", problemsRoutes);
app.use("/", adduserproblemRoutes);
app.use("/", code);

//app.use("/adduserproblem", authMiddleware, adduserproblemRoutes);
app.get("/", (req, res) => {
  res.send("Hello World to onlinejudge");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

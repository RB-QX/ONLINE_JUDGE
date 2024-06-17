const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./model/User.js");
const cookieparser = require("cookie-parser");
const { DBConnection } = require("./database/db.js");

DBConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World to onlinejudge");
});

app.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!(firstname && lastname && email && password)) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const existuser = await User.findOne({ email });
    if (existuser) {
      //console.log(user);
      return res.status(400).json({ message: "User already exists" });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashpassword,
    });

    const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    user.token = token;
    user.password = undefined;

    console.log(token);
    res.status(200).json({ message: "successfully registered", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Serverrr Error", error: error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    user.token = token;
    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      message: "successfully logged in",
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

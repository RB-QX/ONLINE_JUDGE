// middlewares/auth.js

const jwt = require("jsonwebtoken");
const User = require("../model/User");

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }

  try {
    const decoded = jwt.verify(token, "your_secret_key"); // Use your actual secret key
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid authentication token" });
  }
};

module.exports = isAuthenticated;

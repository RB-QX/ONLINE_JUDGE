const mongoose = require("mongoose");
const dotenv = require("dotenv");
//const { default: mongoose } = require("mongoose");

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URL;

const DBConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { DBConnection };

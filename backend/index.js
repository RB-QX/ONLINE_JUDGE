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

app.use(cors());
DBConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);
app.use("/", problemsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World to onlinejudge");
});

// app.post("/register", async (req, res) => {
//   console.log(req.body);
//   try {
//     const { firstname, lastname, email, password } = req.body;

//     if (!(firstname && lastname && email && password)) {
//       return res.status(400).json({ message: "Please fill all the fields" });
//     }

//     const existuser = await User.findOne({ email });
//     if (existuser) {
//       //console.log(user);
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashpassword = await bcrypt.hash(password, 10);
//     const user = await User.create({
//       firstname,
//       lastname,
//       email,
//       password: hashpassword,
//     });

//     const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, {
//       expiresIn: "1h",
//     });
//     user.token = token;
//     user.password = undefined;

//     console.log(token);
//     res.status(200).json({ message: "successfully registered", user });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Serverrr Error", error: error });
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!(email && password)) {
//       return res.status(400).json({ message: "Please fill all the fields" });
//     }
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid password" });
//     }
//     const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, {
//       expiresIn: "1h",
//     });
//     user.token = token;
//     user.password = undefined;

//     const options = {
//       expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
//       httpOnly: true,
//     };

//     res.status(200).cookie("token", token, options).json({
//       message: "successfully logged in",
//       success: true,
//       token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error", error: error });
//   }
// });

// app.post("/forgot-password", (req, res) => {
//   const { email } = req.body;
//   User.findOne({ email: email }).then((user) => {
//     if (!user) {
//       return res.send({ Status: "User not existed" });
//     }
//     const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
//       expiresIn: "1d",
//     });
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "riturajprasad2412@gmail.com",
//         pass: "zxqewvrkkwcfvftg",
//       },
//     });

//     var mailOptions = {
//       from: "riturajprasad2412@gmail.com",
//       to: email,
//       subject: "Reset Password Link",
//       text: `http://localhost:3000/reset_password/${user._id}/${token}`,
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + info.response);
//       }
//     });
//   });
// });

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// app.post("/reset-password/:id/:token", (req, res) => {
//   const { id, token } = req.params;
//   const { password } = req.body;

//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.json({ Status: "Error with token" });
//     } else {
//       bcrypt
//         .hash(password, 10)
//         .then((hash) => {
//           User.findByIdAndUpdate({ _id: id }, { password: hash })
//             .then((u) => res.send({ Status: "Success" }))
//             .catch((err) => res.send({ Status: err }));
//         })
//         .catch((err) => res.send({ Status: err }));
//     }
//   });
// });

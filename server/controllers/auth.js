//Importing dependencies
const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const user = require("../models/user");

//Sign up method
exports.signUp = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      res.status(400).json({ err: errorHandler(err) });
    } else {
      user.salt = undefined;
      user.hashed_password = undefined;
    }
  });
};
//Log In method
exports.logIn = (req, res) => {
  const { email, password } = req.body;
  //Finding user by email
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with that email is not found. Please signup!" });
    }
    if (!user.authenticate(password)) {
      return res
        .status(401)
        .json({ error: "Email and/or password does not match" });
    }
    //if user is found, make sure email and password match
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("t", token, { expire: new Date() + 9999 });
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

//Clearing token in cookie when signing out
exports.signOut = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "User has signed out" });
};
//Protect routes from being accessed by unauthorized user
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({ error: "Access Denied" });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({ error: "Admin resource! Access denied" });
  }
  next();
};

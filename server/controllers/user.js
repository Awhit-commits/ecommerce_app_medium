//Importing dependencies
const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const user = require("../models/user");
//sanity message
exports.signUp = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    err
      ? res.status(400).json({ err: errorHandler(err) })
      : (user.salt = undefined);
    user.hashed_password = undefined;
    res.json({ user });
  });
};

exports.logIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with that email is not found. Please signup!" });
    }
    if(!user.authenticate(password)){
      return res.status(401).json({error:"Email and/or password does not match"})
    }
    //if user is found, make sure email and password match
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("t", token, { expire: new Date() + 9999 });
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
  
};

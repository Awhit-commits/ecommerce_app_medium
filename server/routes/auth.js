const express = require("express");
const router = express.Router();

const {
  signUp,
  logIn,
  signOut,
  requireSignin,
} = require("../controllers/auth");

const { userSignupValidator } = require("../validator/index");

//Signup route
router.post("/signup", userSignupValidator, signUp, requireSignin);

//Login route
router.post("/login", logIn);

//Sign Out route

router.get("/signout", signOut);

module.exports = router;

const express = require("express");
const router = express.Router();

const { signUp,logIn } = require("../controllers/user");

const {userSignupValidator} = require("../validator/index")


//Signup route
router.post("/signup",userSignupValidator, signUp);

//Login route 
router.post("/login",logIn);

module.exports = router;

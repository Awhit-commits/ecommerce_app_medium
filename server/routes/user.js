const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/user");

//Signup route
router.post("/signup", signUp);

module.exports = router;

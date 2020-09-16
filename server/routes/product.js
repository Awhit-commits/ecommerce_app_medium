const express = require('express');
const router = express.Router();
const {create} = require("../controllers/category");
const {userById} = require('../controllers/user');
const {requireSignin,isAdmin,isAuth} = require('../controllers/auth')

router.post ("/product/create/",requireSignin,isAuth,isAdmin,create);


module.exports = router;

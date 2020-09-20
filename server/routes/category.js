const express = require('express');
const router = express.Router();
const {create,categoryById,remove,update,read,list} = require("../controllers/category");
const {userById} = require('../controllers/user');
const {requireSignin,isAdmin,isAuth} = require('../controllers/auth')

router.post ("/category/create/:userId",requireSignin,isAuth,isAdmin,create);
router.get ("/category/:categoryId",read)
router.get("/category",list)
router.delete("/category/:categoryId/:userId",requireSignin,isAuth,isAdmin,remove)
router.put ("/category/:categoryId/:userId",requireSignin,isAuth,isAdmin,update)
router.param('userId',userById);
router.param('categoryId',categoryById)

module.exports = router;

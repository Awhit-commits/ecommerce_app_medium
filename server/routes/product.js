const express = require('express');
const router = express.Router();
const {create,productById,read,remove,update,list} = require("../controllers/product");
const {userById} = require('../controllers/user');
const {requireSignin,isAdmin,isAuth} = require('../controllers/auth')


router.get("/product/:productId",read)
router.get("/product",list)
router.post ("/product/create/:userId",requireSignin,isAuth,isAdmin,create);
router.delete("/product/:productId/:userId",requireSignin,isAuth,isAdmin,remove);
router.put ("/product/:productId/:userId",requireSignin,isAuth,isAdmin,update)
router.param("productId",productById)

router.param("userId",userById)
module.exports = router;

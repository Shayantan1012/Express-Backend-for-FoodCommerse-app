const express=require('express');
const {getcartByUser, modifyProductToCart}=require('../controller/cartControllers');
const { isLoggedIn } = require('../validation/authValidation');
const cartRoute=express.Router();
cartRoute.get('/',isLoggedIn,(req,res)=>getcartByUser(req,res));
cartRoute.post('/:operation/:productId',isLoggedIn,(req,res)=>modifyProductToCart(req,res));
module.exports=cartRoute;
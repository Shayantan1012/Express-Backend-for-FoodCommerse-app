const express=require('express');
const {getcartByUser}=require('../controller/cartControllers');
const { isLoggedIn } = require('../validation/authValidation');
const cartRoute=express.Router();
cartRoute.get('/',isLoggedIn,(req,res)=>getcartByUser(req,res));
module.exports=cartRoute;
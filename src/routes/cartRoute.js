const express=require('express');
const {getcartById}=require('../controller/cartControllers');
const cartRoute=express.Router();
cartRoute.get('/:id',(req,res)=>getcartById(req,res));
module.exports=cartRoute;
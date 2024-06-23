const express=require('express');
const {getcartById}=require('../controller/cartControllers');
const cartRoute=express.Router();
cartRoute.get('/:id',getcartById);
module.exports=cartRoute;
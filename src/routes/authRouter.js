const express=require('express');

const {login}=require('../controller/authController');

const authRouter=express.Router();

authRouter.post('/login',(req,res)=>login(req,res));

module.exports=authRouter;
//
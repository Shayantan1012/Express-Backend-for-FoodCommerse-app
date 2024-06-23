const express=require('express');
const {createUser}=require('../controller/userController');
const userRouter=express.Routers();
userRouter.post('/',createUser);
module.export=userRouter;
const jwt=require('jsonwebtoken');

const { JWT_SECRET } = require('../config/serverConfig');

async function isLoggedIn(req,res,next){
const token =req.cookies["authToken"];
if(!token){
    return res.status(401).json({
        success:false,
        data:{},
        error:"No Authentication!!!!!! ",
        message:"No Auth token Provided!!!",
    })
}
try{
var decoded=jwt.verify(token,JWT_SECRET);
req.user={
    email:decoded.email,
    id:decoded.id,
    role:decoded.role,
   }
   
}catch(error){

}

if(!decoded){
    return res.status(401).json({
        success:false,
        data:{},
        error:"No Authentication!!!!!! ",
        message:"Invalid token Provided!!!",
    })
}
//If reach allow them to access api//
next();
}

/*
This function checks is the autentication user is an Admin or not*/
//Because we will call is Admin after is Logged in thats why we will recieve user details//
async function isAdmin(req,res,next){
const loggedInUser=req.user;
if(loggedInUser.role==="ADMIN"){
    next();
}
else{
    return res.status(404).json({
        success:false,
        data:{},
        message:'You are not a Authorised User!!!!',
        error:{
            statusCode:401,
            reason:"Unauthorised user for this action!!",
        }
    })
    
}
}
module.exports={
    isLoggedIn,isAdmin
}
////
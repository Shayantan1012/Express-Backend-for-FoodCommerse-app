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

const decoded=jwt.verify(token,JWT_SECRET);
if(!decoded){
    return res.status(401).json({
        success:false,
        data:{},
        error:"No Authentication!!!!!! ",
        message:"Invalid token Provided!!!",
    })
}
//If reach allow them to access api//
req.user={
 email:decoded.email,
 id:decoded.id,
}

next();

}
module.exports={
    isLoggedIn,
}
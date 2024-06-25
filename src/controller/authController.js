const {loginUser}=require('../services/authService');


async function login(req,res){
const loginPayload=req.body;

 try{
const response=await loginUser(loginPayload);
return res.status(200).json({
success:true,
message:'Logged IN successfully!!!!',
data:response,
error:{},
})
 }///
 catch(error){
return res.status(error.statusCode || 500).json({
    success:false,
    message:error.message,
    data:{},
    error:error,
})
 }
}
module.exports={login};
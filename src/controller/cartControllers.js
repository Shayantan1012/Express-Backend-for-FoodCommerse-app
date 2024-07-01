const {getCart, modifyCart}=require('../services/cartService');
const AppError = require('../utils/appError');

async function getcartByUser(req,res){
    try{
const cart=await getCart(req.body.userId);
return res.status(201).json({
success:true,
massage:"Successfully fetched Cart!!",
error:{},
data:cart,
})
    }catch(error){
console.log(error);
if(error instanceof AppError){
    return res.status(error.statusCode).json({
        success:false,
        massage:error.message,
        error:error,
        data:{},
        })    
}
return res.status(500).json({
    success:false,
    massage:"Something went wrong",
    error:error,
    data:{},
    })    
}
}

async function modifyProductToCart(req,res){
    try{
const cart=await modifyCart(req.user.id,req.params.productId,req.params.operation=='add');
return res.status(201).json({
success:true,
massage:"Successfully add to Cart!!!",
error:{},
data:cart,
})
    }catch(error){
console.log(error);
if(error instanceof AppError){
    return res.status(error.statusCode).json({
        success:false,
        massage:error.message,
        error:error,
        data:{},
        })    
}
return res.status(500).json({
    success:false,
    massage:"Something went wrong",
    error:error,
    data:{},
    })    
}

}
module.exports={
    getcartByUser,modifyProductToCart
}
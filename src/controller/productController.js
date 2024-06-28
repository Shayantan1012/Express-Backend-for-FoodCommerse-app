const {createProduct}=require('../services/productService');
 async function addProduct(req,res){
    console.log(req.body);
try{
    const product=await createProduct({
        productName:req.body.productName,
        description:req.body.description,
        price:req.body.price,
        catagory:req.body.catagory,
        inStock:req.body.inStock,
        imagePath:req.file.path,
    })
    return res.status(201).json({
        success:true,
        message:"Successfully created the product!!!",
        data:{product},
        error:{},
    })

}catch(error) {
console.log(error);
return res.status(error.statusCode || 500).json({
success:false,
message:error.reason,
data:{},
error:error,
})
}
 }
module.exports={addProduct};

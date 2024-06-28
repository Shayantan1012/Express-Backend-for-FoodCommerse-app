const cloudinary=require('../config/cloudinaryConfig');
const ProductRepositry=require('../reprositories/productRepository');
const fs=require('fs/promises');

async function createProduct(productDetails){
const imagePath=productDetails.imagePath;
if(imagePath){
    try{    const cloudanaryResponse= await  cloudinary.uploader.upload(imagePath);
        console.log(cloudanaryResponse);
            var productImage=cloudanaryResponse.secure_url;
            await fs.unlink(imagePath);
    }
    catch(error){
console.log(error);
throw{reason:"Not able to create Product!!!",statusCode:500};
    }
}
const product=await ProductRepositry.createProduct({
    ...productDetails,
    productImage:productImage,
})

if(!product){
    throw{reason:"Not able to create Product" ,statusCode:500};
}
}
module.exports={
    createProduct,
}
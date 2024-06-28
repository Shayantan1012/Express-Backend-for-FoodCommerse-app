const express=require('express');

const {addProduct}=require('../controller/productController');

const uploader = require('../Middleware/multerMiddleware');

const productRouter=express.Router();

productRouter.post('/',uploader.single('productImage'),(req,res)=>addProduct(req,res));

module.exports=productRouter;
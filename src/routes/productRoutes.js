const express=require('express');

const {addProduct, getProduct, deleteProduct}=require('../controller/productController');

const uploader = require('../Middleware/multerMiddleware');

const productRouter=express.Router();

productRouter.post('/',uploader.single('productImage'),(req,res)=>addProduct(req,res));
productRouter.get('/:id',(req,res)=>getProduct(req,res));
productRouter.delete('/:id',(req,res)=>deleteProduct(req,res));

module.exports=productRouter;
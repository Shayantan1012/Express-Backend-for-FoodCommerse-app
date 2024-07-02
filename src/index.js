const express=require('express');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const cartRouter = require('./routes/cartRoute');
const userRouter=require('./routes/useRoutes');
const authRouter=require('./routes/authRouter');
const cookieParser = require('cookie-parser');
const { isLoggedIn } = require('./validation/authValidation');
const uploader = require('./Middleware/multerMiddleware');
const cloudinary=require('./config/cloudinaryConfig');
const fs=require('fs/promises');
const productRouter = require('./routes/productRoutes');
const orderRoute = require('./routes/orderRoutes');
const app=express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/users',userRouter);
app.use('/carts',cartRouter);
app.use('/auth',authRouter);
app.use('/products',productRouter)
app.use('/orders',orderRoute);
///////////////////////////////////
/*
app.post('/photo',uploader.single('incomingfile'),async(req,res)=>{
    console.log(req.file);
    const result=await  cloudinary.uploader.upload(req.file.path);
    console.log("Rssult from cloudinary->",result);
    await fs.unlink(req.file.path);
    return res.json({
        message:'OK',
    });
})*/
////////////////////////////////////////////
app.post('/ping',isLoggedIn,(req,res)=>{
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message:"Pong"});
})

app.listen(ServerConfig.PORT, async()=>{
    await connectDB();
    console.log(`Server got started at port ${ServerConfig.PORT}!!!!!!`);
});
//0viUsU9ZINsriSNG//
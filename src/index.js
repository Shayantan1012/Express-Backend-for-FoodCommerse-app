const express=require('express');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const User=require('./schema/useSchema');
const cartRouter = require('./routes/cartRoute');
const app=express();
const userRouter=require('./routes/useRoutes');
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.use('/users',userRouter);
app.use('/cart',cartRouter);
app.post('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({message:"Pong"});
})

app.listen(ServerConfig.PORT, async()=>{
    await connectDB();
    console.log(`Server got started at port ${ServerConfig.PORT}!!!!!!`);
});
//0viUsU9ZINsriSNG
const express=require('express');
const ServerConfig = require('./config/serverConfig');
const connectDB=require('./config/dbConfig')
const app=express();
const User=require('./schema/useSchema')
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.post('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({message:"Pong"});
})

app.listen(ServerConfig.PORT, async()=>{
    await connectDB();
    console.log(`Server got started at port ${ServerConfig.PORT}!!!!!`);
   /* const newUser=await User.create({
        email:'pampabiswas@gmail.com',
        password:"3233267232",
        firstname:"Shyantan",
        lastname:"Biswas",
        mobilenumber:"9088088080",*/

    //})
   // console.log(newUser);

});

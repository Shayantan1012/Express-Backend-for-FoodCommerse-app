const express=require('express');
const ServerConfig = require('./config/serverConfig');
const connectDB=require('./config/dbConfig')
const app=express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.post('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({message:"Pong"});
})

app.listen(ServerConfig.PORT, async()=>{
    await connectDB();
    console.log(`Server got started at port ${ServerConfig.PORT}!!`);
});
//PcIGp8nEEEAndWb7
//shayantanbiswas137
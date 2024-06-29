const User=require('../schema/useSchema');
const Cart=require('../schema/cartSchema');

async function findUser(parameters) {
    try{ 
        const response=await User.findOne({...parameters});
        console.log(response);
        return response;
    }catch(error){
console.log(error);
    }
} /////
async function createUser(userDetails){
    try{
        const userResponse=await User.create(userDetails);
        return userResponse;        
    }
catch(error){
    console.log(error);
}
}

module.exports={
    findUser,
    createUser,
}
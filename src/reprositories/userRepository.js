const User=require('../schema/useSchema');
class UserRepository{

async  findUser(parameters) {
    try{ 
        const response=await User.findOne({...parameters});
        console.log(response);
        return response;
    }catch(error){
console.log(error);
    }
} 
async createUser(userDetails){
    try{
        const response=await User.create(userDetails);
        return response;        
    }
catch(error){
    console.log(error);
}
}
}
module.exports=UserRepository;
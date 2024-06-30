const {findUser,createUser}=require('../reprositories/userRepository');
const {createCart}=require('../reprositories/cartRepository');
class UserService{
///
async registerUser(userDetails){
const user=await findUser(
{email:userDetails.email,
mobilenumber : userDetails.mobilenumber,
}
);
if(user){
    throw{reason:'User with the same mobile number and email already exists!!! ',statusCode:400};
}
const newUser=await createUser({
    email:userDetails.email,
    password:userDetails.password,
    firstname:userDetails.firstname,
    lastname:userDetails.lastname,
    mobilenumber:userDetails.mobilenumber,
})
if(!newUser){
    throw{reason:'Something went wrong ,cannot create user',statusCode:500};
}
await createCart(newUser._id);
return newUser;
} 
}
module.exports=UserService;

// It will create a brand New DB
// 1.We need to check if the user and mobite number is present or not.....
// 2.If not then create a user in the database
// 3.Return the details of creat

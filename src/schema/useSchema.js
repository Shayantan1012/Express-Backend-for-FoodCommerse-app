const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:[true,"The Firstname is required!!!"],
        minlength:[5,"The Name must be minimum 5 charecters!!!"],
        lowercase:[true],
        trim:[true],
        maxlength:[20,"First name must be less than or equal to 20 charecters!!!"],
    },
    lastname:{
        type:String,
        require:[true,"The Firstname is required!!!"],
        minlength:[5,"The Name must be minimum 5 charecters!!!"],
        lowercase:[true],
        trim:[true],
        maxlength:[20,"First name must be less than or equal to 20 charecters!!!"],
    },
    mobilenumber:{
        type:String,
        trim:[true],
        unique:[true,"Mobile number must be unique!!!"],
        require:[true,"Mobile number shuold be provided!!"],
        maxlength:[10,"Please give a valid mobile number!!!"],
        minlength:[10,"Please give a valid mobile number!!!"],

    },
    email:{
        type:String,
        trim:[true],
        unique:[true,"Email should be provided!!"],
        require:[true,"Email should be provided!!"],
        match:['^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$',"Please fill a valid email address!!!"],
    },
    password:{
        type:String,
        require:[true,"Password is manditory!!!"],
        minlength:[6,"Password should be minimum six charecter long!!!"],
    }
},{
    timestamps:[true],
})
const User=mongoose.model('User',userSchema);
module.exports=User;
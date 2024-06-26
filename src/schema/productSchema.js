const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    productName:{
        type:String,
        require:[true,"Please give the product Name!!!"],
        maxlength:[20,"First name must be less than or equal to 20 charecters!!!"],
        trim:[true],
    },
    description:{
        type:String,
        minLength:[5,"Product description must be atleast 5 charecters!!!"],
    },
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        require:[true,"Please give the product price!!!"],
    },
    catagory:{
        type:String,
        enum:['Veg','Non-Veg','Drinks','Sides'],
        default:'Veg',
    },
    isStock:{
        type:Boolean,
        require:[true,"Stock status is required!!!"],
        default:true,
    } 
    },{
        timestamps:true,
    }   
)
const Product=mongoose.model('Product',productSchema);
module.exports=Product;
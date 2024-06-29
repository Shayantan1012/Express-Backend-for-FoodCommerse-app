const mongoose=require('mongoose');
const Product = require('./productSchema');

const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'User',
    },
    items:
    [
    {   
       product: {
        type:mongoose.Schema.Types.ObjectId,
          require:true,
            ref:'Product',
    },
    quantity: {
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        default:1,
    }
}
    ],
},{
    timestamps:true,
})
const Cart=mongoose.model('Cart',cartSchema);
module.exports=Cart;
const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, maxlength: 32, required: true,unique:true },
    description: { type: String,  maxlength: 2000, required: true },
    price:{type:Number,required:true,maxlength:32},
    category:{type:ObjectId,ref:"category092020", maxlength:32},
    quantity:Number,
    sold:{type:Number, default:0},
    photo:{data:Buffer,contentType:String},
    shipping:{required:false,type:Boolean},
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("product092020", productSchema);
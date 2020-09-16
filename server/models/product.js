const mongoose = require("mongoose");

const {ObjectId} = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, trim: true, maxlength: 32, required: true },
    description: { type: String,  maxlength: 2000, required: true },
    price:{type:Number,required:true,maxlength:32},
    category:{type:ObjectId,ref:"Category092020", maxlength:32},
    quantity:Number,
    photo:{data:Buffer,contentType:String},
    shipping:{required:false,type:Boolean}
  },
  { timestamps: true }
);

module.exports = mongoose.model("product092020", productSchema);
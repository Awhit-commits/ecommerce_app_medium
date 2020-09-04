const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define product model with name, description,and price
const product = new Schema({
  name: String,
  description: String,
  price: Number,
});

//Creates model in database collection
module.exports = mongoose.model("Product092020", product);

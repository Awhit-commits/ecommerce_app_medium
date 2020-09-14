const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: { type: String, trim: true, maxlength: 32, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category092020", categorySchema);

//importing dependencies 
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
userRoute = require("./routes/user");

const app = express();

// app.use(cors())

app.use("/user", userRoute);

port = process.env.PORT || 5000;
//database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to database"));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

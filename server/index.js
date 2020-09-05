//importing dependencies 
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
userRoute = require("./routes/user");

const app = express();

// app.use(cors())
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cookieParser());

//routes middleware
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

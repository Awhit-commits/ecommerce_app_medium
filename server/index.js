//importing dependencies
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require('cors');
authRoute = require("./routes/auth");
userRoute = require("./routes/user");
categoryRoute = require("./routes/category")
productRoute = require("./routes/product")

const app = express();

app.use(cors())
//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//routes middleware
app.use("/api", authRoute);

app.use("/api", userRoute);
app.use ("/api",categoryRoute)
app.use("/api",productRoute)

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

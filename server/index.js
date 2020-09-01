//Enables the .env file, therefore add a env property to process object.
require("dotenv").config();

//Configure body-parser so you can retrieve values from the req.body, if not the req.body will be undefined.
const bodyParser = require("body-parser");

//Require the session for saving user data and giving a user a unique experience.
const session = require("express-session");

//Import  mongoose module to connect to mongodb database instance using it's connection string.
const mongoose = require("mongoose");

//Import express server
const express = require("express");

//Set instance of the express server to a variable
const app = express();

//Define the Port your will be running your server on.

const PORT = 5000;

//Use cors for enable cross origin sharing
const cors = require("cors");

//Connect the mongoose to the database using it's connect method.
mongoose.connect(
  process.env.CONNECTION_STRING,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log("Database Error----------------", err);
    }
    console.log("Connected to database");
  }
);

//Controllers
//These are how we define our endpoints
//Note can name all the variable anything you want  I am just operating on convention or best practice.
//Set your admin functionality
const adminController = require("./controllers/admin_controller");
//Set your cloudinary functionality
const cloudinaryController = require("./controllers/cloudinary_controller");
//Set your user functionality.
const userController = require("./controllers/user_controller");
//Set your products functionality.
const productsController = require("./controllers/products_controller");

//Middleware
//For initializing the req.body. If the middleware is not used, the req.body is undefined.
app.use(bodyParser.json());

//For storing cookies for the user.
app.use(
  session({
    //Create a secret for the cookie store it in .env file
    //Secret can be anything.
    secret: process.env.SESSION_SECRET,
    //this for resaving the cookie false, if true can cause a memory leak.
    resave: false,
    //saveUnitialized best false, unless connect to a database.
    saveUninitialized: false,
    cookie: {
      //The max age of the cookie
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
  })
);

app.use(cors());

setTimeout(() => {
  //Read the user's session
  app.get("/api/user-data", userController.readUserData);

  //Add a item to cart
  app.post("/api/user-data/cart", userController.addToCart);

  //Remove a item from cart
  app.delete("/api/user-data/cart/:id", userController.removeFromCart);

  //Logging-in User
  app.post("/api/login", userController.login);

  //Logout User
  app.post("/api/logout", userController.logout);

  //Products Endpoints
//Getting all the products
app.get('/api/products', productsController.readAllProducts);
//Getting a specified product
//Use a request parameter, since retrieving a specified product..
app.get('/api/products/:id', productsController.readProduct);

//Admin Endpoints
//Gets the admin users.
app.get('/api/users', adminController.getAdminUsers);
//When a admin creates a product. No need for request parameter in this case. Since we are inserting data to database.
app.post('/api/products', adminController.createProduct);
//When a admin update a current product. Need request parameter since updating a specific product based on  the id.
app.put('/api/products/:id', adminController.updateProduct);
//When a admin deletes a product, need an id to specify a product to delete.
app.delete('/api/products/:id', adminController.deleteProduct);
}, 200);

app.listen(PORT, () => console.log('Listening on Port:', PORT));
const express = require("express");

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

// Database coonection
mongoose.connect(
  "mongodb+srv://harpreetsinghthechamp:Hecommerce@cluster0.palm6ol.mongodb.net"
);

//api creation
app.get("/", (req, res) => {
  res.send("express app is running");
});
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage: storage,
});

app.use("/images", express.static("upload/images"));

//Creating upload Endpoint for images
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Schema for Creating Products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  console.log(id);
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});
// creating api for deleting products
app.post("/removeproduct", async (req, res) => {
  console.log(req.body.id);
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  res.json({
    successs: 1,
    name: req.body.name,
  });
});
//creating api for getting all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("all product fetched");

  res.send(products);
});
// Schema creating for user Model

const Users = mongoose.model("Users", {
  name: { type: "String" },
  email: { type: "String", unique: true },
  password: { type: "String" },
  cartData: { type: "Object" },
  date: { type: Date, default: Date.now() },
});
// creating endpoint for the registering user
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      error: "Existing user found with same Email",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) cart[i] = 0;

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };
  console.log(data);

  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

//creating endpoint for user login
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    if (user.password === req.body.password) {
      const data = {
        user: {
          id: user.id,
        },
      };
      console.log(data);

      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, error: "wrong password" });
    }
  } else res.json({ succes: false, error: "Wrong Email Id " });
});

//creating endpoint for new collection data
app.get("/newcollection", async (req, res) => {
  let product = await Product.find({});
  let newcollection = product.slice(1).slice(-8);
  res.send(newcollection);
});
//creating endpoint for popular in women section
app.get("/popularinwomen", async (req, res) => {
  let product = await Product.find({ category: "women" });
  let popularWomen = product.slice(0, 4);
  console.log(popularWomen);
  console.log("hi");
  res.send(popularWomen);
});

//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret-ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ error: "please authenticate using valid token" });
    }
  }
};
app.post("/cart", async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added");
});

//creating endpoint to remove product from cartdata
app.post("/removefromcart", fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.item] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndDelete(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Deleted");
});
//creating endpoint to get cart data
app.post("/getcart", fetchUser, async (req, res) => {
  console.log("get cart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});
app.listen(port, (error) => {
  if (!error) console.log(`Server running on ${port}`);
  else console.log(`${error} error`);
});

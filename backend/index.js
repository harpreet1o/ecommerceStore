const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const port = 3000;

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

app.listen(port, (error) => {
  if (!error) console.log(`Server running on ${port}`);
  else console.log(`${error} error`);
});

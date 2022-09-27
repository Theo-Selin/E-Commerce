const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

const User = require("./models/user");

dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require APIs
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listening on PORT", 3000);
  }
});

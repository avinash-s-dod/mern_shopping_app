require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
const PORT = process.env.port || 5000;
app.listen(() => console.log(`Server running on port ${PORT}`));

require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MonogoDB connected successfully");
  } catch (error) {
    console.log("MonogoDB connection FAILED");
    process.exit(1);
  }
};

module.exports = connectDB;

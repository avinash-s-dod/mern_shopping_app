require("dotenv").config();
const roomsData = require("./data/rooms");
const connectDB = require("./config/db");
const Rooms = require("./models/Rooms");

connectDB();

const importData = async () => {
  try {
    await Rooms.deleteMany();
    await Rooms.insertMany(roomsData);
    console.log("Rooms data imported succcessfully");
    process.exit();
  } catch (error) {
    console.error("Data import failed");
    process.exit(1);
  }
};

importData();
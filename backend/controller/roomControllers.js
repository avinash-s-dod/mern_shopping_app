const Rooms = require("../models/Rooms");

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Rooms.find();
    return res.status(200).send({
      success: true,
      message: "Rooms fetched successfully",
      rooms: rooms,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error,
      rooms: [],
    });
  }
};

const getRoomById = async (req, res) => {
  try {
    const roomId = req.params.id;
    if (!roomId) {
      return res.status(200).send({
        success: false,
        message: "Room id is required!",
      });
    }
    const roomDetails = await Rooms.findOne({ _id: roomId });
    if (roomDetails) {
      return res.status(200).send({
        success: true,
        message: "Rooms fetched successfully",
        data: roomDetails,
      });
    } else {
      return res.status(200).send({
        success: false,
        message: "Please enter valid id",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error,
    });
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
};

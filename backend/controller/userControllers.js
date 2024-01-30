const Users = require("../models/Users");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    return res.status(200).send({
      success: true,
      message: "Users fetched successfully",
      users: users,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(200).send({
        success: false,
        message: "Id is required!",
      });
    }
    const user = await Users.findOne({ _id: id });
    if (user) {
      return res.status(200).send({
        success: true,
        message: "User fetched successfully",
        data: user,
      });
    } else {
      return res.status(200).send({
        success: false,
        message: "Please enter valid id",
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error,
    });
  }
};

module.exports = { getAllUsers, getUserById };

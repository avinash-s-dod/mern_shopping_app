const express = require("express");
const { getAllUsers, getUserById } = require("../controller/userControllers");

const router = express.Router();

// @desc Get All Users
// @route GET /api/Users
// @access Public
router.get("/", getAllUsers);

// @desc Get User
// @route GET /api/user/:id
// @access Public
router.get("/:id", getUserById);

module.exports = router;

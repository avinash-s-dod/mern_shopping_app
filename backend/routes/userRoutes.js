const express = require("express");
const { getAllUsers, getUserById, signup, login } = require("../controller/userControllers");

const router = express.Router();

// @desc Get All Users
// @route GET /api/Users
// @access Public
router.get("/", getAllUsers);

// @desc Get User
// @route GET /api/user/:id
// @access Public
router.get("/:id", getUserById);

// @desc Post User signup
// @route Post /api/signup
// @access Public
router.post("/signup", signup);

// @desc Post User login
// @route Post /api/login
// @access Public
router.post("/login", login);

module.exports = router;

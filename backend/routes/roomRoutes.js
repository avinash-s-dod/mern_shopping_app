const express = require('express')
const { getAllRooms, getRoomById } = require('../controller/roomControllers')

const router = express.Router()

// @desc Get All Rooms
// @route GET /api/rooms
// @access Public
router.get('/', getAllRooms)

// @desc Get All Rooms
// @route GET /api/room/:id
// @access Public
router.get('/:id', getRoomById)

module.exports = router

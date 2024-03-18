const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  categoryId: {
    type: String,
    required: true
  },
  available: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  bookingStatus: {
    type: String,
    required: true
  }
})

const Rooms = mongoose.model('Rooms', roomSchema)
module.exports = Rooms

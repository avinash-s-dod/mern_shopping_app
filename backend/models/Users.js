const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  mobileNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  idProof: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
})

const Users = mongoose.model('Users', UsersSchema)
module.exports = Users

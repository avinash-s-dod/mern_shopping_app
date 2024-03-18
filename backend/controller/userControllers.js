const Users = require('../models/Users')
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find()
    return res.status(200).send({
      success: true,
      message: 'Users fetched successfully',
      users
    })
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error
    })
  }
}

const getUserById = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      return res.status(200).send({
        success: false,
        message: 'Id is required!',
        data: null
      })
    }
    const user = await Users.findOne({ _id: id })
    if (user) {
      return res.status(200).send({
        success: true,
        message: 'User fetched successfully',
        data: user
      })
    } else {
      return res.status(200).send({
        success: false,
        message: 'Please enter valid id'
      })
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error,
      data: null
    })
  }
}

const signup = async (req, res) => {
  try {
    const { name, email, mobileNumber, address, idProof, password } = req.body
    if (![name, email, mobileNumber, password].every(Boolean)) {
      return res.status(400).send({
        success: false,
        message: 'Please enter all the fields',
        data: null
      })
    }

    const userExist = await Users.findOne({ email, mobileNumber })
    if (userExist) {
      return res.status(401).send({
        success: false,
        message: 'User already exists!'
      })
    }
    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new Users({
      name,
      mobileNumber,
      password: hashPassword,
      idProof: idProof || null,
      address: address || null,
      email
    })
    await newUser.save()
    return res.status(201).json({
      message: 'User registered successfully',
      success: true,
      data: newUser
    })
  } catch (error) {
    console.log('error', error)
    return res.status(400).send({
      success: false,
      message: error,
      data: null
    })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (![email, password].every(Boolean)) {
      return res.status(400).send({
        success: false,
        message: 'Please enter all the fields',
        data: null
      })
    }
    await Users.findOne({ email }).then(async (userData) => {
      if (!userData) {
        return res.status(401).send({
          success: false,
          message: "User doesn't exists!",
          data: null
        })
      }
      console.log('user', userData)
      console.log('password', password)
      console.log('userData?.password', userData?.password)

      if (await bcrypt.compare(password, userData?.password)) {
        const token = jwt.sign({ id: userData?._id }, 'HOTEL_MANAGEMENT', { expiresIn: '1d' })
        return res.status(200).send({
          success: true,
          message: 'Login successfully.',
          data: userData,
          accessToken: token
        })
      } else {
        return res.status(401).send({
          success: false,
          message: 'Please enter valid password!',
          data: null
        })
      }
    })
  } catch (error) {
    console.log('error', error)
    return res.status(400).send({
      success: false,
      message: error
    })
  }
}

module.exports = { getAllUsers, getUserById, signup, login }

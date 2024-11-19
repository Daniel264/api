const { User, validate } = require('../models/user')
import mongoose from 'mongoose'
import express from 'express'
const router = express.Router()

router.post('/', async (req, res) => {
  const users = await User.find().sort('name')
  res.send(users)
})

export default router

const { User, validate } = require('../models/user')
import mongoose from 'mongoose'
import express from 'express'
const router = express.Router()

router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({ staffId: req.body.staffId })
  if (user) return res.status(400).send('User already registered.')

  user = new User({
    name: req.body.name,
    staffId: req.body.staffId,
    password: req.body.password,
  })
  await user.save()
  res.send(user)
})

export default router

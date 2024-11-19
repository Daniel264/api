import Joi from 'joi'
import mongoose from 'mongoose'

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 50,
    },
    staffId: {
      type: Number,
      required: true,
      minlength: 3,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024,
      unique: true,
    },
  })
)

function validateUser(user) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    staffId: Joi.number().min(4).max(20).required(),
    password: Joi.string().min(6).max(255).required(),
  }
  return Joi.object(schema).validate(user)
}

exports.User = User
exports.validate = validateUser

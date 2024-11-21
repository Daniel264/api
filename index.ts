import Joi from 'joi'
Joi.object = require('joi-objectid')(Joi)
import mongoose from 'mongoose'
import users from './routes/user' 
import express from 'express'
const app = express()

mongoose
  .connect('mongodb://localhost/hexa')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDb'))

app.use(express.json())
app.use('/api/users', users)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.get('/login/porters', (req, res) => {
  res.send('Login for porters')
})
app.get('/login/nurses', (req, res) => {
  res.send('Login for nurses')
})
app.get('/login/chaplaincy', (req, res) => {
  res.send('Login for chaplaincy')
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

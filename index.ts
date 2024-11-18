import express from 'express'

const app = express()
const port = 4000

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

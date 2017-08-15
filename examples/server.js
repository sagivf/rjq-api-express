const express = require('express')
const rjqApiExpress = require('../index')
const app = express()

const { PORT = 4000 } = process.env

app
  .use(rjqApiExpress())
  .listen(PORT)

console.log(`Running api at: http://localhost:${PORT}`)

const express = require('express')
const rjqApiExpress = require('../index')
const app = express()

const { PORT = 4000 } = process.env

app
  .use(rjqApiExpress('/rjq-api', {
    queues: ['Mathematics', 'RegistrationEmail'],
    db: 'JobQueue'
  }))
  .listen(PORT)

console.log(`Running api at: http://localhost:${PORT}`)

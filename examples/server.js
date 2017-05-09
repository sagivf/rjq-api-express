const express = require('express')
const rjqApi = require('rjq-api')
const app = express()

const { PORT = 4000 } = process.env

app
  .use(rjqApi('/rjq-api', {
    queues: ['Mathematics', 'RegistrationEmail'],
    db: 'JobQueue'
  }))
  .listen(PORT)

console.log(`Running api at: http://localhost:${PORT}`)

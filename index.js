const assert = require('assert')
const express = require('express')
const rjqApi = require('rjq-api')

module.exports = function (path, options) {
  const app = express()
  const router = express.Router()
  assert(path, 'missing route path')
  const api = rjqApi(options)

  router
    .get('/', function (req, res) {
      res.send('rjq api - v1.0.0')
    })
    .get('/queues', async function (req, res) {
      const data = await api.queues()
      res.send(data)
    })
    .get('/queues/:name', async function (req, res) {
      const summary = await api.queue(req.params.name)
      res.send(summary)
    })

  app.use(path, router)

  return app
}
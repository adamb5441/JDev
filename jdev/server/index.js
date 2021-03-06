const express = require('express')
const consola = require('consola')
const axios = require('axios')
const bodyparser = require ('body-parser');
const { Nuxt, Builder } = require('nuxt')
const app = express()
app.use(bodyparser.json())
OutsSideController = require('./OutsideController')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.get("/status", OutsSideController.checkStatus)
  app.post("/api/getJSON", OutsSideController.getJSON)
  app.post("/api/postJSON", OutsSideController.sendJSON)
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()


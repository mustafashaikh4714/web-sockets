const express = require('express')
const app = express()
var server = app.listen(8000)
var io = require('socket.io').listen(server, { origins: '*:*' })

io.on('connection', client => {
  setInterval(() => {
    client.emit('data', Math.floor(Math.random() * 100))
  }, 1000)
})

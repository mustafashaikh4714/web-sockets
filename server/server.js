const express = require('express')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')

const app = express();
const port = process.env.PORT || 3000
var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(path.join(__dirname, '../public')))

io.on('connection', (socket) => {
    console.log('New User Connected');
    
     setInterval(() => {
        socket.emit('randomNumber', Math.max(Math.floor(Math.random() * 10) + 1, 3))
     },1000)

    socket.on('disconnect', () => {
        console.log('User was disconnected');
        
    })
})

server.listen(port, () => {
    console.log(`Server is up on the port ${port}`);
})
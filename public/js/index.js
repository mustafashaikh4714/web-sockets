var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');
    // As long as socket is connected client can emit data.
})

socket.on('disconnect', function () {
    console.log('Disconnect from server');
    
})

socket.on('randomNumber', function (random) {
    console.log(random);
})
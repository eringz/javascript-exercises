const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(1337);

const io = require('socket.io')(server);
let counter = 0;

//2 This triggers our server's connection listener to run, and this occurs for every new socket connection. 
io.on('connection', function(socket){


  /*
    3 Then the server will emit a message 'greeting' to the client, because we placed an emit event there. 
  */
  socket.emit('greeting', {msg : 'Greetings, from serv Node, brought to you by Sockets! - Server', msg1: 'hi'});
  
  //7 The server's listener with the matching 'thank you' label will be triggered...
  socket.on('thank you', function(data){ //8 (note: this log will be on your server's terminal)
    console.log(data.msg)
  });
});
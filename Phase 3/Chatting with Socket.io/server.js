
const io = require('socket.io')(3000)

let express = require("express");

// create the reference of express module 
let app = express();

// then load the express-ws module and create the reference 
//of express-ws with the help of express reference using 
// IIFE
let ws = require("express-ws")(app);

 const users = {}

io.on('connection', socket => {
    console.log("Connected to client")
   socket.on('new-user', name => {
    users[socket.id] = name
    
   uiusocket.broadcast.emit('hello', name)
  })
  socket.emit("obj1","Hello Client")
})


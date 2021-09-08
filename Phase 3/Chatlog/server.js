let express = require("express");
let app = express();
mongoose = require("mongoose");
let http = require("http").Server(app);
let io = require('socket.io')(http);
mongoose.connect('mongodb://localhost/tcsmean', function(err){
    if(err){console.log(err)
    }else{
        console.log("Connected to the database")
    }
})
var chatSchema = mongoose.Schema({
    msg:String,
    created: {type: Date, default: Date.now}
})
var Chat = mongoose.model('Message', chatSchema);

let responses = [ "I did not understand. Would you like me to connect you with a representative?",
"Email : abc@yahoo.com | Phone # 123-456-789"
];

function clientMessage(msg){
if(msg=="Contact Information") return 1;
else if(msg=="Connect me with a representative")return 1;
else if(msg=="Hurry Up!!!") return 1;
else if(msg=="Were you satisfied with the help?") return 1;
else return 0;
}
     app.get("/",(req,res)=>{
     res.sendFile(__dirname+"//index.html");
     })

io.on("connection",(socket)=> {
    console.log("Client connected");

    socket.on("Client_Message",(msg)=> {
        let serverToClient = responses[clientMessage(msg[1])];

        let messageToConsole = "Client Message:" +msg[1];
        console.log(messageToConsole);

        var newMsg = new Chat({msg:msg[1]})
        newMsg.save(function(err){
            if(err) throw err;
            socket.emit("ServerResponse",serverToClient);
        })

        
    })
    
})

http.listen(9090,()=>console.log("Server running on port number 9090."));

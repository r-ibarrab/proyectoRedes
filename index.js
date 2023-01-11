const express = require('express')
const path = require('path')
const http = require('http');
const { Server } = require("socket.io");

const config = require('./config')
const ApplicationRoutes = require("./routes")

const app = express()
const server = http.createServer(app);
const io = new Server(server);


app.use(express.json())
app.use(express.static(path.join(__dirname,"/public")))

if(config.PRODUCTION == "FALSE"){
    const morgan = require('morgan')
    app.use(morgan("dev"))
}

app.use(ApplicationRoutes)


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on("hola",(msg)=>{
        console.log(msg)
    })

    const broadcastMessage = ()=>{
        socket.emit("alerta","alerta weon")
    }


    setInterval(broadcastMessage,2000)
    
    
  });

server.listen(config.PORT,(e)=>{
    if(e) return 1

    console.log("Server running properly")
})
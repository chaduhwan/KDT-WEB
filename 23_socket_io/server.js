const http = require('http')
const express = require('express');
const SocketIo = require('socket.io');

const app = express();
const PORT = 8000;

//http server
const server = http.createServer(app);
//Socket server
const io = SocketIo(server);

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('client')
})

io.on('connection',(socket)=>{
    socket.on('open_message',(arg1,arg2,cb)=>{
        console.log(arg1,arg2)
        cb(arg2)
    })

    socket.on("form_message",(arg)=>{
        console.log(arg)
        socket.emit("backend_message",arg)
    })
})

//sever
server.listen(PORT,()=>{
    console.log(`http://localhost${PORT}`)
});

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

app.get('/chat',(req,res)=>{
    res.render('chat')
})

io.on('connection',(socket)=>{
    // socket.on('open_message',(arg1,arg2,cb)=>{
    //     console.log(arg1,arg2)
    //     cb(arg2)
    // })

    // socket.on("form_message",(arg)=>{
    //     console.log(arg)
    //     socket.emit("backend_message",arg)
    //     // 전체 보내기
    //     io.emit("backend_message",arg)
    // })

    
    console.log('조인 전',socket.rooms)

    socket.on("join",(res)=>{
        //채팅방을 생성하는 방법은 join(방아이디) 사용, 방이 존재하면 그방으로 접속 ! 
        socket.join(res);
        socket.room = res;
        console.log('조인후',socket.rooms);

        const roomInfo = io.sockets.adapter.rooms.get(res).size
        console.log(roomInfo)


        // 나를 제외한 전체 브라우저에게 메세지 전달
        socket.broadcast.to(res).emit('create','새로운 브라우저가 입장하였습니다')
    })

    socket.on('message',(res)=>{
        //io.to(특정방).emit(이벤트) 특정방의 전체 사용자에게 메세지 전달
        // io.to(socket.room).emit('chat',res);
        socket.emit('chat',res);
        socket.broadcast.to(socket.room).emit('other_chat',res)
    })

    socket.on('leave',()=>{
        socket.leave(socket.room)
        const roomInfo = io.sockets.adapter.rooms.get(socket.room).size
        console.log(roomInfo)
    })


    //실습
    socket.on("button",(arg)=>{
        console.log(arg)
        socket.emit("backend_button",arg)
    })
})

//sever
server.listen(PORT,()=>{
    console.log(`http://localhost${PORT}`)
});

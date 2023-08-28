const express = require('express')
const app = express();
const ws = require('ws');
const PORT = 8000;

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('client');
});

const server = app.listen(PORT,()=>{
    console.log(`http://localhost${PORT}`)
})

//app.listen 밑에 소켓은 있어도 됨.
// 웹소켓 서버 접속
const wss = new ws.Server({server}); // server : server

//브라우저(클라이언트)들을 담을 배열변수
const sockets = [];

//socket변수는 접속한 브라우저를 가리킴.
wss.on('connection',(socket)=>{
    // console.log(socket);
    //sockets 배열에 브라우저 정보 추가
    sockets.push(socket);
    
    console.log('클라이언트가 연결되었습니다.')

    //메세지 이벤트
    socket.on('message',(message)=>{
        //접속한 클라이언트 확인가능
        console.log(wss.clients)
        //wss,clients 에 forEach를 해도 밑과 동일하게 결과나옴

        //클라이언트의 상태확인
        //socket.readyState : 웹소켓의 클라이언트 상태를 나타내는 속성
        //ws.CONNECTING : 0 웹소켓이 연결시도중일 때 
        //ws.OPEN : 1 웹소켓이 열린상태
        //ws.CLOSING : 2 웹소켓이 닫히는 중
        //ws.CLOSED : 3 웹소켓이 닫힌 상태

        //웹소켓을 통해 클라이언트와 서버간의 데이터를 주고 받을 때는 일반적으로 문자열 또는 버퍼형태로 전달됨
        //서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요 
        //=> 버퍼를 쓰는 이유
        // console.log(message)

        // 그렇게 들어온 데이터를 역직렬화하여 사용
        const msg = JSON.parse(message)
        console.log(`클라이언트로 받은 메세지 ${message}`)
        //socket.send(`서버메세지:${message}`)  
        sockets.forEach(elem=>{
            console.log(elem.readyState)
            elem.send(`${msg.nickname} 님의 메세지 : ${msg.msg}`)
        })
    })

    //오류 이벤트
    socket.on('error',(error)=>{
        console.log('에러발생',error)
    })

    //접속 종류 이벤트
    socket.on('close',()=>{
        console.log('클라이언트와 연결이 종료되었습니다.')
    })
})
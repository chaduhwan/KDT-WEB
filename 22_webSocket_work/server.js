const http = require('http')
const ws = require('ws');
const express = require('express');
const app = express();
//http 서버
const server = http.createServer(app)
//웹소켓 서버 접속
const wss = new ws.Server({ server });

const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});


//투표결과 초기화 변수
const votes = {
    typeOne: 0,
    typeTwo: 0,
};

//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    
    socket.on('message', (message) => {
        const vo = JSON.parse(message)
        console.log(vo)
        
        wss.clients.forEach(clients=>{
            console.log(clients.readyState)
            clients.send(JSON.stringify(vo))
        })
        
    });
    //오류이벤트
    socket.on('error', (err) => {
        console.log('에러가 발생하였습니다', err);
    });
    //접속종료이벤트
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료됨');
    });
});

// 관례상 서버 오픈은 맨아래에 위치 !
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
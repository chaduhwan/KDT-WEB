const { render } = require("ejs");
const express = require(`express`);
const app = express();
const PORT = 8000;

app.set("view engine",`ejs`);
app.set(`views`,`./views`);

//미들웨어
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//.js 생략 가능 + index 도 생략가능 => ./routes만 써도 index.js 실행
const router = require(`./routes/index.js`);
app.use(`/`,router);

//example
//const userRouter = require(`./router/user)
//app.use(`/user`,userRouter)

//* 맨 마지막 선언, get, post 방식으로 여러개 만드는 것이 아닌 use를 사용해서 하나로 압축
app.use(`*`,(req,res)=>{
    res,render(`404`)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
const express = require(`express`)
const app = express();
const PORT = 8000;

//body-parser 순서 중요 !! 바디 파서가 라우터보다 위에 있어야댐 !! 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//view engine
app.set("view engine",`ejs`);
app.set(`views`,`./views`);


//louter
app.get(`/`, (req,res)=>{
    res.render(`index`,{title : `폼 전송 실습`});
});

app.get(`/getform`,(req,res)=>{
    console.log(req.query)
    res.render(`result`,{
        title : "GET요청 폼 결과 확인하기",
        userInfo: req.query
    })
})

app.post(`/postform`,(req,res)=>{
    console.log(req.body);
    res.render(`result`,{
        title : "POST요청 폼 결과 확인하기",
        userInfo : req.body
    })
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
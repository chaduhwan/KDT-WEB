const express = require(`express`);
const app = express();
const PORT = 8000;
const mysql =require(`mysql`);


app.set("view engine",`ejs`);
app.set(`views`,`./views`);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// mysql 연결
const conn = mysql.createConnection({
    host:'127.0.0.1', // 맥북은 localhost 대신 127.0.0.1
    user :'hwandu',
    password : 'asd123',
    database : 'kdt9',
    port : 3306
});

conn.connect((err)=>{
    if(err) {
        console.log(err)
        return;
    }
    console.log(`connect`);
})

// const router = require(`./routes`);
// app.use(`/`,router);
app.get(`/`,(req,res)=>{
    res.render(`index`);
})

// 방명록 전체 보기
app.get(`/visitor`,(req,res)=>{
    const query = `select * from visitors`
    conn.query(query,(err,rows)=>{
        console.log(rows);
        res.render(`visitor`,{data : rows});
    });
});

// 방명록 하나 조회
app.get(`/visitor/get`,(req,res)=>{
    res.send(`하나조회`)
})

// 방명록 하나 생성
app.post(`/visitor/write`,(req,res)=>{
    const query = `insert into visitors (name,comment) values ('${req.body.name}','${req.body.comment}')`
    conn.query(query,(err,rows)=>{
        console.log(`rows`,rows)
    res.send({id:rows.insertId,name :req.body.name, comment :req.body.comment})
    })
    
})

// 방명록 하나 수정
app.patch(`/visitor/edit`,(req,res)=>{
    res.send(`하나 수정`)
})

// 방명록 하나 삭제
app.delete(`/visitor/delete`,(req,res)=>{
    res.send(`하나 삭제`)
})




app.use(`*`,(req,res)=>{
    res.render(`404`)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});
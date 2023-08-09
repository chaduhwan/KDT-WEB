const { render } = require("ejs");
const express = require(`express`);
const app = express();
const PORT = 8000;
const mysql = require(`mysql`);

app.set("view engine",`ejs`);
app.set(`views`,`./views`);

app.use(express.urlencoded({extended:true}))
app.use(express.json());

//mysql 연결
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
//routes

//main
app.get(`/`,(req,res)=>{
    res.render(`index`);
})
//회원가입 페이지
app.get(`/signup`,(req,res)=>{
    res.render('signup')
})
//회원가입
app.post(`/signup`,(req,res)=>{
    console.log(req.body)
    const query = `insert into user1 (userid,name,pw) values ('${req.body.id}','${req.body.name}','${req.body.pw}')`
    conn.query(query,(err,rows)=>{
        if(err){
            console.log('err')
            res.send({result:false})
            return;
        }
    res.send({result:true});
    })
})

//로그인 페이지
app.get(`/login`,(req,res)=>{
    res.render('login')
})
//로그인
app.post(`/login`,(req,res)=>{
    const query = `select * from user1 where userid='${req.body.id}' and pw='${req.body.pw}'`
    conn.query(query,(err,rows)=>{
        if(rows.length===0){
            res.send({result:false})
        } else{
            res.send({rows,result:true})
        }
    })
})

//프로필
app.post(`/profile`,(req,res)=>{
    const query = `select * from user1 where userid='${req.body[0].userid}'`
    conn.query(query,(err,rows)=>{
        console.log(rows[0])
        const datas = rows[0]
        res.render('profile',{data : datas})
    })
    
})

app.use(`*`,(req,res)=>{
    res.render(`404`)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});
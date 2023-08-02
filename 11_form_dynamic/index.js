const express = require(`express`);
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//view-enigne
app.set("view engine",`ejs`);
app.set(`views`,`./views`);

//router
app.get(`/`,(req,res)=>{
    res.render(`index`)
});

app.get(`/ajax`,(req,res)=>{
    console.log(`back`,req.query)
    res.send(req.query);
})

app.post(`/ajax`,(req,res)=>{
    console.log(`back`,req.body);
    res.send(req.body);
})

app.get(`/axios`,(req,res)=>{
    console.log(`back`,req.query);
    res.send(req.query);
})

app.post(`/axios`,(req,res)=>{
    console.log(`back`,req.body);
    res.send(req.body);
})

app.get(`/fetch`,(req,res)=>{
    console.log(`back`,req.query);
    res.send(req.query);
})

app.post(`/fetch`,(req,res)=>{
    console.log(`back`,req.body);
    res.send(req.body);
})

//실습
app.get(`/axiosWork`,(req,res)=>{
    console.log(`back`,req.query);
    res.send(req.query);
})

app.post(`/axiosWork`,(req,res)=>{
    console.log(`back`,req.body);
    const rightid = "enghks23";
    const rightpw = "123123";
    if(rightid===req.body.id && rightpw === req.body.pw){
        res.send(true)
        console.log(true)
    } else {
        res.send(false)
        console.log(false)
    }
})

//sever start
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
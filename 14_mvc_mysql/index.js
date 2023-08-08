const express = require(`express`);
const app = express();
const PORT = 8000;


app.set("view engine",`ejs`);
app.set(`views`,`./views`);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//router
// const router = require(`./routes`);
// app.use(`/`,router);
const visitorRouter = require(`./routes/visitor`)

app.get(`/`,(req,res)=>{
    res.render(`index`);
})

//localhost:8000/visitor ~ 로 시작하는 
app.use('/visitor',visitorRouter)

app.use(`*`,(req,res)=>{
    res.render(`404`)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});
const express =require('express')
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 8000;

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const secret = 'secret key'

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/login',(req,res)=>{
    //실제 pw 같은 중요한 정보는 들어가지 않음! 
    const {id ,pw } = req.body

    const token = jwt.sign({id},secret);
    res.send({result : true, token})

})

app.post('/verify',(req,res)=>{
    console.log(req.headers.authorization)
    const auth =req.headers.authorization
    const token = auth.split(' ')

    if(token[0]=== 'Bearer'){
       const verify = jwt.verify(token[1],secret,(err,decoded)=> {
        if(err){
            return res.status(403).send({message:'검증실패'})
        }
        console.log(decoded)
        res.send({user : decoded});
       })
       console.log(verify)
    } else{
        res.send({message : '잘못된 인증방식입니다'})
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost${PORT}`)
})
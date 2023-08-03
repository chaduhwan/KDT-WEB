const express = require(`express`);
const app = express();
const path = require(`path`);
const multer = require(`multer`);
const { render } = require("ejs");
const PORT = 8000;

//view engine
app.set("view engine",`ejs`);
app.set(`views`,`./views`);

//body-parser
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//정적파일설정
app.use(`/upload`, express.static(__dirname + `/upload`))

//multer
const upload = multer({
    //dest:업로드할 파일을 저장할 경로를 지정
    dest:`upload/`
})

const uploadDetail = multer({
    //disk--:파일을 디스크에 저장하기 위한 모든제어기능을 제공
    storage:multer.diskStorage({
        destination(req,file,done){
            done(null,'upload/')
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname)
            console.log('ext',ext);
            done(null,path.basename(file.originalname,ext)+Date.now()+ext)
        }
    }),
    limits:{fieldSize:5*1024*1024},
})

const uploadwork = multer({
    storage:multer.diskStorage({
        destination(req,file,done){
            done(null,'upload/')
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname)
            console.log('ext',ext);
            const newfilename = `${req.body.id}`
            done(null,path.basename(newfilename)+ext)
        }
    }),
    limits:{fieldSize:5*1024*1024},
})
//router
app.get(`/`,(req,res)=>{
    res.render(`index`)
});

app.post(`/upload`,uploadDetail.single(`userfile`),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
});

app.post(`/upload/array`,uploadDetail.array(`userfiles`),(req,res)=>{
    console.log(req.files)
    console.log(req.body)
})

app.post(`/upload/fields`,uploadDetail.fields([{name:`userfile1`},{name:`userfile2`}]),(req,res)=>{
    console.log(req.files)
    console.log(req.body)
})
//동적 파일 업로드
app.post(`/dynamicFile`,uploadDetail.single(`dynamic-file`),(req,res)=>{
    console.log(req.body)
    res.send(req.file);
})

//파일 업로드 실습
app.post(`/uploadwork`,uploadwork.single(`workfile`),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    res.render(`result`,{
    userphoto: req.file
    })
})

//sever open
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

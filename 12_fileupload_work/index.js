const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const path = require('path');

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/uploads', express.static(__dirname + '/uploads'));

//multer 설정
const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'uploads/')
    },
    filename : (req,file,cb) => {
        const ext = path.extname(file.originalname);
        const newName = path.basename(file.originalname,ext) + Date.now() + ext;
        cb(null,newName)
    }
})
const limits = {
    fileSize : 5 * 1024 * 1024
}
const upload = multer({storage,limits})

app.post('/work',upload.array('files'),(req,res)=>{
    console.log(req.files)
    res.send(req.files)
})

//router
app.get('/', (req, res) => {
    res.render('index');
});

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

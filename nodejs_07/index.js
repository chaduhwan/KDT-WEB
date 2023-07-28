const mod = require(`./module`)

const {a,b} = require(`./module`)

// a,b로 객체 선택시 내가 원하는 것들만 빠르게 선택가능 ! 
console.log(b)

const http = require(`http`);
require(`fs`);

const sever = http.createServer(function(req,res){
    // res.writeHead(200)
    // res.write("<h1>hello world</h1>")
    // res.end("<p>End</p>")

    // 파일전송
    try {
        const data = fs.readFileSync(`./index.html`)
        res.writeHead(200)
        res.end(data)
    } catch (error) {
        console.log(error)
        res.writeHead(404)
        res.end(error.message)
    }
});

sever.listen(8000, function(){
    console.log("8000 port sever")
})
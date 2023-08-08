// exports.getVisitors = ()=>{
//     return [
//         {id  : 1 , name : `홍길동`,comment : `hello` },
//         {id  : 2 , name : `성춘향`, comment : `hello`}
//     ]
// }

const mysql = require(`mysql`);
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

exports.getvisitors =(Callback)=>{
    const query = `select * from visitors`
    conn.query(query,(err,rows)=>{
        console.log(rows);
        Callback(rows);
    });
}

exports.getvisitor = (id, Callback)=>{
    const query = `select * from visitors where id=${id}`;
    conn.query(query,(err,rows)=>{
        if(err){
            console.log('err')
            return;
        }
        Callback(rows);
    })
}

exports.postVisitor = (data,Callback)=>{
    const query = `insert into visitors (name,comment) values ('${data.name}','${data.comment}')`
    conn.query(query,(err,rows)=>{
        console.log(`rows`,rows)
        Callback(rows);
    })
}

exports.patchVisitor = (data,Callback)=>{
    const query = `update visitors set name='${data.name}',comment='${data.comment}' where id=${data.id}`
    conn.query(query,(err,rows)=>{
        console.log('rows',rows)
        if(err){
            console.log(err)
            res.send({result :false})
            return;
        }   
       Callback();
    })
}

exports.deleteVisitor =(data,Callback)=>{
    const query = `delete from visitors where id=${data.id}`;
    conn.query(query,(err,rows) => {
        if(err){
            console.log(err)
            res.send({result :false})
            return;
        }   
     Callback();
    })
}
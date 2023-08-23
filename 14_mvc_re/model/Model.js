const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

//임시 데이터
const comments = [
    {
        id : 1 ,
        userid :'hello',
        date : '2023-08-23',
        comment : '안녕하세요'
    },
    {
        id : 2 ,
        userid :'ohio',
        date : '2023-08-23',
        comment : '오하이오'
    },
    {
        id : 3 ,
        userid :'happy',
        date : '2023-08-23',
        comment : '행복하세요'
    },
    {
        id : 4 ,
        userid :'love',
        date : '2023-08-23',
        comment : '사랑합니다'
    },
];
module.exports = comments;

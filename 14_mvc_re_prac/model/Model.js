const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

const users = [
    {
        id : 1 ,
        name :'차두환',
        gender : 'male',
        major : 'business'
    },
    {
        id : 2 ,
        name :'차두환2',
        gender : 'female',
        major : 'medlical'
    },
    {
        id : 3 ,
        name :'차두환3',
        gender : 'male',
        major : 'desgin'
    },
    {
        id : 4 ,
        name :'차두환4',
        gender : 'female',
        major : 'physical'
    },
    {
        id : 5 ,
        name :'차두환5',
        gender : 'male',
        major : 'magic'
    }
];
module.exports = users;

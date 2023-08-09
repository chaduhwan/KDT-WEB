// const mysql = require('mysql');
import mysql from 'mysql2/promise'

//mysql 연결
const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'hwandu',
    password: 'asd123',
    database: 'kdt9',
    port: 3306,
});
//creteConnection : 단일 연결 ,매번 연결이 필요할 때 마다 새로운 연결을 생성함 
// 연결수가 많아지면 성능에 영향이 생김 ! 
//createPool : 여러연결, 여러개의 연겨을 미리 생성하고 관리
// 요청이 들어올때 마다 생성한 연결을 할당. 동시처리 가능

export const post_signup = async (data) => {
    try{
        const query = `insert into user1 (userid, pw, name) values (?,?,?)`; 
        await conn.query(query,[data.userid,data.pw,data.name])
    }catch(error) {
        console.log(error)
    }
};

// exports.post_signup = (data, callback) => {
//     const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
//     conn.query(query, (err, rows) => {
//         console.log('post_signup', rows);
//         callback();
//     });
// };

export const post_signin = async (data) => {
   try {
    const query = `select * from user1 where userid = ? and pw = ? `
    const rows = await conn.query(query,[data.userid, data.pw])
    return rows;
   } catch (error){
        console.error();
   }
}

// exports.post_signin = (data, callback) => {
//     const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
//     conn.query(query, (err, rows) => {
//         console.log('post_signin', rows);
//         callback(rows);
//     });
// };

export const post_profile = async (data) =>{
    try {
        const query = `select * from user1 where userid=?`
        const [rows] = await conn.query(query,[data.userid])
        return rows;
    } catch (error) {
        console.log(error)
    }
}

// exports.post_profile = (data, callback) => {
//     const query = `SELECT * FROM user WHERE userid='${data.userid}' `;
//     conn.query(query, (err, rows) => {
//         console.log('post_profile', rows);
//         callback(rows);
//     });
// };

export const edit_profile = async (data) =>{
    try {
        const query = `update user1 set userid =?, pw=?, name=? where id =?`
        const [rows] = await conn.query(query,[data.userid, data.pw, data.name, data.id])
    } catch (error) {
        
    }
}

// exports.edit_profile = (data, callback) => {
//     const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}  `;
//     conn.query(query, (err, rows) => {
//         callback();
//     });
// };

export const delete_profile = async (id) => {
try {
    const query = `delete from user1 where id = ?`
     await conn.query(query,[id])
} catch (error) {
    console.log(error)
}
}

// exports.delete_profile = (id, callback) => {
//     const query = `DELETE FROM user WHERE id=${id}`;
//     conn.query(query, (err, rows) => {
//         callback();
//     });
// };

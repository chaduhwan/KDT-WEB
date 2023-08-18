const { User } = require('../models');
const crypto = require('crypto')

const salt = crypto.randomBytes(16).toString('base64');
const iter = 808 ;
const keyleng = 64;
const digest = 'sha512'

exports.index = (req, res) => {
    res.render('index');
};

exports.signuppage = (req,res) => {
    res.render('signup')
}

exports.signup =(req,res) => {
    const {userid,pw,name}=req.body;

     User.create({
        userid ,
        pw : crypto.pbkdf2Sync(pw,salt,iter,keyleng,digest).toString('base64'),
        name 
    })

    res.send({result : true})
}

exports.loginpage = (req,res) => {
    res.render('login');
}

exports.login = (req,res) => {
    const {userid,pw} =req.body;
    const compare = crypto.pbkdf2Sync(pw, salt, iter, keyleng, digest).toString('base64')
    User.findOne({where:{userid,pw:compare}}).then(data=>{
       res.send({data:data,result:true})
    })
}

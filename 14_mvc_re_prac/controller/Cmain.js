const users = require('../model/Model');

exports.main = (req, res) => {
    res.render('index');
};

exports.user =(req,res)=>{
    res.render('user',{users})
}

exports.plus = (req,res)=>{
    const {name, gender, major} = req.body;
    users.push({
        id:users.length +1,
        name,
        gender,
        major
    })
}

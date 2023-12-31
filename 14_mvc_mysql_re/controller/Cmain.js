const model = require('../model/Model');

//GET

//메인페이지
const main = (req, res) => {
    res.render('index');
};

//회원가입 페이지
const signup = (req,res) => {
    res.render('signup')
}

//로그인페이지
const signin = (req,res) => {
    res.render('signin')
}

//회원정보페이지
const profile = (req,res) => {
    console.log(req.params)
    model.db_profile(req.params,(result)=>{
        res.render('profile',{data : result[0]})
    })
}

////////////////////////////////////
//POST

//회원가입
const post_signup= (req,res) => {
    model.db_signup(req.body,()=>{
        res.json({result : true});
    });
}

//로그인
const post_signin = (req,res) =>{
    model.db_signin(req.body,(result)=>{
    if(result.length > 0) {
        res.json({result:true, data : result[0]})
    } else {
        res.json({result:false})
    }        
    });
}

//회원정보 수정
const edit_profile = (req,res) => {
    model.db_edit(req.body,()=>{
        res.json({result:true})
    })
}

module.exports = {
    main,
    signup,
    signin,
    profile,
    post_signup,
    post_signin,
    edit_profile
}
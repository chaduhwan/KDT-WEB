// const model = require('../model/Model');
// /models/index에서 index는 생략

//쿠키설정
const {User} = require('../models')
const cookieConfig = {
    httpOnly : true,
    maxAge : 60 * 1000
}

//암호화 설정
const crypto = require('crypto');
const salt = crypto.randomBytes(16).toString('base64')
const iter = 808 ;
const keyleng = 64;
const digest = 'sha512'


////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    //쿠키사용
    console.log('cookie',req.cookies)
    res.render('index');
};

//회원가입페이지
const signup = (req, res) => {
    //쿠키생성
    //res.cookie(쿠키이름, 쿠키값, 옵션객체)
    res.cookie('testCookie','signup',cookieConfig)
    res.render('signup');
};

//로그인페이지
const signin = (req, res) => {
    console.log(req.session.userInfo)
    if(req.session.userInfo) {
        res.redirect(`/profile/${req.session.userInfo.id}`)
    } else {
        res.render('signin');
    }
    
};

//회원정보 조회 페이지
const profile = (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });

    //finrOne : 데이터 베이스에서 하나의 정보를 찾을 때 사용함, 객체 반환
    //where : 객체형태로 찾을 정보를 입력
    User.findOne({
        where : {id : req.params.number}
    }).then((result) => {
        res.render('profile',{data : result})
    })
};
const buy = (req, res) => {};

///////////////////////////////
//POST

//회원가입
const post_signup = (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    const {userid, name, pw} = req.body
    //create : 데이터 생성
    // 실습과제 : 비밀번호 암호화해서 저장하기
    User.create({userid, name , pw : crypto.pbkdf2Sync(pw,salt,iter,keyleng,digest).toString('base64')}).then(()=>{
        res.json({result:true});
    });
};

//로그인
const post_signin = async (req, res) => {
    // model.db_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.json({ result: true, data: result[0] });
    //     } else {
    //         res.json({ result: false });
    //     }
    // });
    //실습과제 - 로그인
    const {userid, pw} = req.body
    const compare = crypto.pbkdf2Sync(pw,salt,iter,keyleng,digest).toString('base64')
    
    // 1. 아이디를 찾아서 사용자 존재 유무 체크
    const user = await User.findOne({
        where : {userid}
    })
    if(user !==null) {
            // 2. 입력된 비밀번호 암호화하여 기존 데이터와 비교 
            User.findOne({
                where:{userid : user.userid ,pw :compare}
            }).then((data)=>{
                if(data !==null) {
                    //세션 생성
                    req.session.userInfo = {name:user.name, id : user.id}
                    res.send({data,result:true})
                } else {
                    res.send({result:false})
                }
            })
        } else {
            res.send({result:false})
        }
};

/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });

    //update (수정될 정보를 객체형태로 입력, 수정될 데이터 객체 입력)
    const {name, pw ,id} = req.body
    User.update({name, pw},{where : {id}}).then(()=>{
        res.json({result:true})
    })
};

/////////////////////////////////////////////
//delete
// 회원 탈퇴 destroy
const delete_profile = (req,res) => {
    const {id} = req.body
    User.destroy({
        where : {id}
    }).then(
        res.send({result:true}))
}

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    delete_profile
};

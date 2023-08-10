// const User = require('../model/User');
const models = require('../models')

// import * as User from '../model/User.js'

export const index = (req, res) => {
    res.render('index');
};
export const signup = (req, res) => {
    res.render('signup');
};
export const post_signup = async(req, res) => {
    //model
    try{
        // await User.post_signup(req.body)
        models.user.create({
            userid : req.body.userid,
            pw : req.body.pw,
            name : req.body.name
        }).then(result=>{
            res.send({ result: true });
        })
    }catch(error){
        console.log(error)
    }
};

export const signin = (req, res) => {
    res.render('signin');
};


export const post_signin = async(req, res) => {
    //model
    try{
        const {usrtid ,pw} = req.body
         await models.findOne({
            where : {userid,pw}
        }).then(data=>{ if (result.length > 0) {
            res.send({ result: true, data});
        } else {
            res.send({ result: false, data: null });
        }})
    } catch(error) {
        console.log(error)
    }
};

export const post_profile = async(req, res) => {
    try {
         await models.findOne({
            where : {userid : req.body.userid}
        }).then(result=>{
            res.render('profile', { data: result });
        })
    } catch (error) {
        console.log(error)
    }
};

export const edit_profile = async (req, res) => {
    try {
        const {userid,pw,name} = req.body;
     await models.update({
        userid,
        name,
        pw 
     },{
        where : {id : req.body.id}
     }).then(result=>{
        res.send({ result: true });
     })
    } catch (error) {
        console.log(error)
    }
};

export const delete_profile = async (req, res) => {
    try {
        const {id} =req.body
        await models.destroy({
            where : {id}
        }).then()
        res.send({ result: true });
    } catch (error) {
        
    }
};

const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.index);
//로그인
router.get('/login',controller.loginpage)
router.post('/login',controller.login)
//회원가입
router.get('/signup',controller.signuppage)
router.post('/signup',controller.signup)

module.exports = router;

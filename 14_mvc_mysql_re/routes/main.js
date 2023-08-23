const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

//회원가입
router.get('/signup',controller.signup) // 회원가입 페이지 열기
router.post('/signup',controller.signup) // 회원가입
//로그인

module.exports = router;

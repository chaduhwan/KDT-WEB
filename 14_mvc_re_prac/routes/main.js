const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

// 전체목록보기
router.get('/user',controller.user);

//유저 정보 추가
router.post('/plus',controller.plus)

module.exports = router;

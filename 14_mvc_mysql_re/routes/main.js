const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

//회원가입
router.get('/signup',controller.signup) // 회원가입 페이지 열기
router.post('/signup',controller.post_signup) // 데이터 베이스에 회원정보 저장

//로그인
router.get('/signin',controller.signin) // 로그인 페이지 열기
router.post('/signin',controller.post_signin) // 

//회원정보

//회원정보조회
//GET 조회 방식일 때는 url를 query string 또는 파라미터 방식으로 지정
// query string은 페이지 이동없이 데이터를 가져오며 파라미터 방식은 이동하면서 가져옴 !! (res.render일때) << 절대적인것은 아님
router.get('/profile/:number',controller.profile)

//회원정보수정
router.patch('/profile/edit',controller.edit_profile)

//에시) 회원 구매목록
// router.get('/profile/buy',null) 
// 위 router.get('/profile/:id',controller.show_profile) 코드의 :id가 변수이기에 모든 경로가 앞의 코드로 가기에 /profile/buy로 접근할수 가없음 !!
// >> 코드를 위로 올려 순서를 바꿔주는 등의 방법을 써야함!!

module.exports = router;

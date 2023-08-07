const express = require(`express`);
const router = express.Router();
const controller = require(`../controller/CComment`)

router.get(`/`,controller.main);

router.get(`/comments`,controller.comments);

router.get(`/comment/:id`,controller.comment);

router.get(`/Work`,controller.Work);

router.post(`/axiosWork`,controller.axiosWork);

//파일을 모듈화 하여 사용
module.exports = router ;

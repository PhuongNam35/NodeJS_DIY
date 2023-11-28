const express = require('express');
const { getHomepage, getABC, getHoiDanIT,
  postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeController');
const router = express.Router();

//config route
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoidanit', getHoiDanIT);

router.get('/create', getCreatePage);

router.get('/update/:userID', getUpdatePage);

router.post('/create-user', postCreateUser);

module.exports = router;
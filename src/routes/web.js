const express = require('express');
const { getHomepage, getABC, getHoiDanIT } = require('../controllers/homeController');
const router = express.Router();

//config route
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hoidanit', getHoiDanIT);

module.exports = router;
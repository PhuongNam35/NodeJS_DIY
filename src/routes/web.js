const express = require('express');
const router = express.Router();

//config route
router.get('/', (req, res) => {
  // res.send('Hello World!');
  res.render('sample.ejs');
})

router.get('/abc', (req, res) => {
  res.send('Phuong Nam');
})

module.exports = router;
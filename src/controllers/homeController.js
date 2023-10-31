const getHomepage = (req, res) => {
  res.send("Hello World vs Hoi Dan IT & Eric! & nodemon");
}

const getABC = (req, res) => {
  res.send('Phuong Nam');
}

const getHoiDanIT = (req, res) => {
  res.render('sample.ejs');
}

module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT
}
const connection = require('../config/database')
const { getAllUsers, getUserById } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
  let results = await getAllUsers()
  return res.render('home.ejs', { listUsers: results });
}

const getABC = (req, res) => {
  res.send('Phuong Nam');
}

const getHoiDanIT = (req, res) => {
  res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(">>> req.body: ", email, name, city);

  let [results, field] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`, [email, name, city]);

  console.log(">>> check results: ", results);
  res.send('Created Successfully')
}

const getCreatePage = (req, res) => {
  res.render('create.ejs');
}

const getUpdatePage = async (req, res) => {
  const userID = req.params.userID
  let user = await getUserById(userID)
  res.render('edit.ejs', { userEdit: user })
}

module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
  getUpdatePage
}
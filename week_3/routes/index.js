import express from "express";
import sql from "../database/sql";
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await sql.getUsers()
  console.log(users);
  res.render('users', {
    title: '사용자 목록',
    users
  });
});

module.exports = router;
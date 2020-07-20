var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');

/* GET users listing. */
router.post('/users/register', function(req, res) {
  usersController.createUser(name, lastName, email, password, (error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
});

module.exports = router;

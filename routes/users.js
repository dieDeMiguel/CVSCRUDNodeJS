var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');

/* GET users listing. */
router.get('/register', function(req, res) {
  usersController.createUser(req.body.name, req.body.lastName, req.body.email, req.body.password, (error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
});

module.exports = router;

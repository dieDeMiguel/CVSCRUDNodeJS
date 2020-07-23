var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users');

/* POST and GET users listing. */
router.post('/register', function(req, res) {
  usersController.createUser(req.body, (error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
});

/* Get one user by email */
router.get('/:email', function(req, res) {
  usersController.getUser(req.params.email, (error, response) =>{
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
});

/* Get all users */
router.get('/all', function(req, res) {
  usersController.getAllUsers((error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
});

router.put('/', function(req, res) {
  usersController.updateUser(req.body, (error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
})



module.exports = router;

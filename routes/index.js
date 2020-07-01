var express = require('express');
var router = express.Router();
const fs = require('fs');
const app = require('../app');
const validateItem = require('../controllers/validation');
const readFile = require('../controllers/readfile');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET items 
router.get('/items', function(req, res) {
    const fileName = 'items.csv'
      readFile(fileName, (error, file) => {
        if (error) {
          res.send({error}).status(400);
        } 
        res.status(200).send(file);
      })
});

//Create an Item with error handling
router.post('/items', function(req, res) {
  validateItem(req.body, (error, response) => {
    if(error) {
      res.send({
        Error: error
      }).status(500)
    } else {
      res.send(response).status(201);
    }
  })
})




module.exports = router;

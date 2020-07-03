var express = require('express');
var router = express.Router();
const fs = require('fs');
const {createItem, readFileFromMemory } = require('../controllers/items');
const storeItem = require('../utils/storeitem');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET items 
router.get('/items', function(req, res) {
    const fileName = req.body.fileName;
    readFileFromMemory(fileName, (error, response) => {
      error == null ? res.status(200).send(response) : res.status(400).send(error);
    })
});


//Create an Item with error handling
router.post('/items', function(req, res) {
  createItem(req.body, (error, response) => {
    error == null ? res.status(201).send(response) : res.status(412) .send(error);
  });
});




module.exports = router;

var express = require('express');
var router = express.Router();
const fs = require('fs');
const {createItem} = require('../controllers/items');
const storeItem = require('../utils/storeitem');



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
  createItem(req.body, storeItem)
  res.send(req.body);
});




module.exports = router;

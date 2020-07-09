var express = require('express');
var router = express.Router();
//const {createItem, listItems, getItem, updateItem, removeFile } = require('../controllers/items');
const itemController = require('../controllers/items');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET items 
router.get('/items', function(req, res) {
  itemController.listItems((error, response) => {
      error == null ? res.status(200).send(response) : res.status(400).send(error);
    })
});


//Create an Item with error handling
router.post('/items', function(req, res) {
  itemController.createItem(req.body, (error, response) => {
    error == null ? res.status(201).send(response) : res.status(412) .send(error);
  });
});

//Fetch an object by ID, the fileName is on req.body.filename and the ID is part of the URL
router.get('/items/:id', function(req, res) {
  itemController.getItem(req.params.id, (error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
})

//Update an Item, req.body contains the changes in the item, the ID of the item is whithin the URL
router.put('/items/:id', function(req, res) {
  itemController.updateItem(req.body, req.params.id, (error, response) => {
    error == null ? res.status(202).send(response) : res.status(400).send(error);
  })
})

//Delete an Item in the file route
router.delete('/items/:id', function(req, res) {
  itemController.removeFile(req.params.id, (error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
})

module.exports = router;

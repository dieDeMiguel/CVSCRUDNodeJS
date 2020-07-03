var express = require('express');
var router = express.Router();
const {createItem, readFileFromMemory, getByID } = require('../controllers/items');




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

//Fetch an object by ID
router.get('/items/:id', function(req, res) {
  getByID(req.body.fileName, req.params.id, (error, response) => {
    error == null ? res.status(200).send(response) : res.status(400).send(error);
  })
})




module.exports = router;

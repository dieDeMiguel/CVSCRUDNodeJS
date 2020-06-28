var express = require('express');
var appToUse = express()
var router = express.Router();
const fs = require('fs');
const app = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET objects array complete
router.get('/items', function(req, res, next) {
    const readFile = 'items.csv'
      fs.readFile(readFile, (err, file) => {
        if (err) {
          const error = new Error('The file doesn\'t exist');
          error.status = 417,
          next(error);
        } 
        res.status(201).send(file);
      })
});
  

//Create an Item
router.post('/items', function(req, res, next) {
  if(req.body.id && req.body.name) {
    newItem = JSON.stringify({'id': req.body.id, 'name': req.body.name});
    fs.writeFile('items.csv', newItem, (err) => {
      if(err) throw err;
      console.log('The file has been created');
      res.status(201).send(newItem);
    })
  } else if(req.body.id) {
    var error = new Error('The item must have a name');
    error.status = 412;
    next(error);
  } else if(req.body.name) {
    var error = new Error('The item must have an Id')
    error.status = 412;
    next(error);
  } else {
    var error = new Error('The item must have an id and a name');
    error.status = 412;
    next(error);
  }
});

  appToUse.use((req, res, next) => {
    let error = new Error({
      status : '404',
      error : 'Not found'
    });

  appToUse.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        message: error.message || 'Internal server error',
        status: error.status || 500
      }
    })
  })
})



module.exports = router;

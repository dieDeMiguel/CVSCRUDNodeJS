var express = require('express');
var router = express.Router();
const fs = require('fs');
const app = require('../app');
const idNameValidation = require('../controllers/validation');
const readFile = require('../controllers/readfile');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET objects array complete
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
  idNameValidation(req.body.id, req.body.name, (error, response) => {
    if(error) {
      res.send({
        Error: error
      }).status(500)
    } else {
      res.send(response).status(201);
    }
  })
})

//Only the name of the Item can be updated
router.patch('/items', (req, res, next) => {
  if(req.body.name) {
    var fileName = 'items.csv';
    fs.readFile(fileName, 'utf8', (err, file) => {
      if(err) {
        const error = new Error('There is no file');
        error.status = 417;
        next(error);
      }
      var parsedFile = JSON.parse(file);
      if(req.body.name.length > 3) {
        var fileName = 'items.csv'
        var newItem = JSON.stringify({'id': parsedFile.id, 'name': req.body.name});
        fs.writeFile(fileName, newItem, (err) => {
          if(err) {
            var error = new Error('The file was not updated');
            error.status(500);
            next(error);
          }
          console.log('The name was changed to: ' + req.body.name);
          res.status(202).send(file)
        })   
      } else if(req.body.name < 3 ) {
          var error = new Error('The item\'s name must be at least 3 words long');
          error.status = 412;
          next(error);
        }
    })
  } else {
    var error = new Error('The item must have a name');
    error.status = 412;
    next(error);
  }
})

//handler when the URL doesn't match any endpoint above.
  router.use((req, res, next) => {
    let error = new Error({
      status : '404',
      error : 'Not found'
    });

  //error handler for every error generated above
  router.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        message: error.message || 'Internal server error',
        status: error.status || 500
      }
    });
  });
});



module.exports = router;

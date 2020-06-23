var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET objects array complete
router.get('/items', function(req, res, next) {
  res.send('Here you will find the array parsed');
});

// GET item in the array
router.get('/items/:id', function(req, res, next) {
  res.send('Fetch an object whithin the array by :id');
});

//Create an Item
router.post('/item', function(req, res, next) {
  res.semd('');
});

//Update an item in the array
router.put('/item/:id', function(req, res, next) {
  res.send('');
});

//Delete an item by :id
router.delete('/item/:id', function(req, res, next) {
  res.send('');
})


module.exports = router;

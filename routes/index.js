var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET objects array complete
router.get('/items', function(req, res, next) {
  res.send('Here you will find the array parsed');
});

// // GET item in the array
// router.get('/items/:id', function(req, res, next) {
//   res.send('Fetch an object whithin the array by :id');
// });

//Create an Item
router.post('/items', function(req, res, next) {
  let item = JSON.stringify({'id': req.body.id, 'name': req.body.name});
  
  fs.appendFileSync('items.txt', item, (err) => {
    if(err) throw err;
  console.log("Item was saved into memory");
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// GET objects array complete
router.get('/items', function(req, res, next) {
    const readFile = 'items.csv'
    try {
      fs.readFile(readFile, (err, file) => {
        if (err) {
          throw err;
        } 
        res.status(201).send(data);
      })
    } catch(e) {
     res.status(500).send(e);
    }
});
  


// // GET item in the array
// router.get('/items/:id', function(req, res, next) {
//   res.send('Fetch an object whithin the array by :id');
// });

//Create an Item
router.post('/items', function(req, res, next) {

  if(req.body.id && req.body.name) {
    newItem = JSON.stringify({'id': req.body.id, 'name': req.body.name});
    fs.writeFile('items.csv', newItem, (err) => {
      if(err) throw err;
      console.log('The file has been sent');
      res.status(201).send(newItem);
    })
  } else if(req.body.id) {
    res.send('The item must have a name')
  } else if(req.body.name) {
    res.send('The item must have an Id')
  } else {
    res.send('The item must have name and id')
  }

 


  // if(req.body) {
  //   let item = JSON.stringify({'id': req.body.id, 'name': req.body.name});
  //   try {
  //     fs.appendFile('items.csv', item, (err) => {
  //       if(err) throw err;
  //       console.log("Item was saved into memory");
  //       res.status(201).send(req.body);
  //     });
  //   } catch(e) {
  //    res.status(500).send(e);
  //   }
  // }

});


module.exports = router;

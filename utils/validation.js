const fs = require('fs');
const storeItem = require('./storeitem');
  
const validateItem = (item, callback) => {
  storeItem(item, (error, response) => {
    if(error) {
      callback(error, null);
    }
    callback(null, response)
  });
}
    


module.exports = validateItem;
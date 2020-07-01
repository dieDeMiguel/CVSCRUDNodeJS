const fs = require('fs');
const storeItem = require('./storeitem');
  
  const idNameValidation = (id, name, callback) => {
    if(id && name.length > 3) {
      storeItem(id, name, (error, response) => {
        if(error) {
          callback(error, undefined);
        }
        callback(undefined, response)
      })
    } else if(id) {
      callback('The item must have a name', undefined);
    } else {
      callback('The item must have an ID', undefined);
    }
  }


module.exports = idNameValidation
const fs = require('fs');
const storeItem = require('./storeitem');
  
  const idNameValidation = (id, name, callback) => {
    if(id && name.length > 3) {
      storeItem(id, name, (error, response) => {
        if(error) {
          callback(error, null);
        }
        callback(null, response)
      })
    } else if(!name) {
      callback('The item must have a name', null);
    } else if(!id) {
      callback('The item must have an ID', null);
    } else if(name.length <=3) {
      callback('The name must have at least 4 words', null);
    } else {
        callback('The item must have a name and an Id', null);
    }
  }


module.exports = idNameValidation